import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaEdit, FaTrash } from 'react-icons/fa'; // Ícones para os botões
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify'; // Notificações
import 'react-toastify/dist/ReactToastify.css'; // Estilo do react-toastify
import './App.css';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: ''
  });
  const [editandoAluno, setEditandoAluno] = useState(null);
  const [errors, setErrors] = useState({}); // Estado para erros de validação

  // Carregar alunos ao iniciar
  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/alunos');
      console.log("Alunos recebidos:", response.data);
      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
      toast.error("Erro ao buscar alunos: " + (error.response?.data?.message || error.message));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!novoAluno.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!novoAluno.telefone.trim()) newErrors.telefone = "Telefone é obrigatório";
    if (!novoAluno.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(novoAluno.email)) {
      newErrors.email = "Email inválido";
    }
    if (!novoAluno.endereco.trim()) newErrors.endereco = "Endereço é obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setNovoAluno({ ...novoAluno, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Limpa o erro ao digitar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Impede o envio se houver erros

    try {
      if (editandoAluno) {
        // Modo de edição
        const response = await axios.put(`http://localhost:8080/api/alunos/${editandoAluno.id}`, novoAluno);
        console.log("Aluno atualizado:", response.data);
        toast.success("Aluno atualizado com sucesso!");
      } else {
        // Modo de cadastro
        const response = await axios.post('http://localhost:8080/api/alunos', novoAluno);
        console.log("Aluno cadastrado:", response.data);
        toast.success("Aluno cadastrado com sucesso!");
      }
      setNovoAluno({ nome: '', telefone: '', email: '', endereco: '' });
      setEditandoAluno(null);
      setErrors({});
      fetchAlunos();
    } catch (error) {
      console.error("Erro ao salvar aluno:", error);
      toast.error("Erro ao salvar aluno: " + (error.response?.data?.message || error.message));
    }
  };

  const handleEdit = (aluno) => {
    setEditandoAluno(aluno);
    setNovoAluno({
      nome: aluno.nome || '',
      telefone: aluno.telefone || '',
      email: aluno.email || '',
      endereco: aluno.endereco || ''
    });
    setErrors({});
  };

  const handleCancelEdit = () => {
    setEditandoAluno(null);
    setNovoAluno({ nome: '', telefone: '', email: '', endereco: '' });
    setErrors({});
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
      try {
        await axios.delete(`http://localhost:8080/api/alunos/${id}`);
        console.log(`Aluno com id ${id} excluído com sucesso.`);
        fetchAlunos();
        toast.success("Aluno excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir aluno:", error);
        toast.error("Erro ao excluir aluno: " + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div className="App">
      <ToastContainer /> {/* Container para as notificações */}
      <h1>Cadastro de Alunos</h1>
      
      {/* Formulário de Cadastro/Edição */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="nome"
            value={novoAluno.nome}
            onChange={handleInputChange}
            placeholder="Nome"
          />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="telefone"
            value={novoAluno.telefone}
            onChange={handleInputChange}
            placeholder="Telefone"
          />
          {errors.telefone && <span className="error">{errors.telefone}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={novoAluno.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="endereco"
            value={novoAluno.endereco}
            onChange={handleInputChange}
            placeholder="Endereço"
          />
          {errors.endereco && <span className="error">{errors.endereco}</span>}
        </div>
        <div className="form-actions">
        <button type="submit">
          {editandoAluno ? 'Atualizar' : 'Cadastrar'}
          </button>
          {editandoAluno && (
            <button type="button" className="cancel-btn" onClick={handleCancelEdit}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista de Alunos */}
      <h2>Alunos Cadastrados</h2>
      <div className="alunos-grid">
        <AnimatePresence>
          {alunos && alunos.length > 0 ? (
            alunos.map((aluno, index) => (
              <motion.div
                key={aluno.id || index}
                className="aluno-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaUser className="aluno-icon" />
                <p><strong>Nome:</strong> {aluno.nome || 'Nome não disponível'}</p>
                <p><strong>Telefone:</strong> {aluno.telefone || 'Telefone não disponível'}</p>
                <p><strong>Email:</strong> {aluno.email || 'Email não disponível'}</p>
                <p><strong>Endereço:</strong> {aluno.endereco || 'Endereço não disponível'}</p>
                <div className="card-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(aluno)}
                  >
                    <FaEdit style={{ marginRight: '5px' }} /> Editar
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(aluno.id)}
                  >
                    <FaTrash style={{ marginRight: '5px' }} /> Excluir
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p>Nenhum aluno cadastrado.</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;