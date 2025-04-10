package br.duduslugee.registroalunos.controller;

import br.duduslugee.registroalunos.model.Aluno;
import br.duduslugee.registroalunos.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @PostMapping
    public ResponseEntity<Aluno> cadastrarAluno(@RequestBody Aluno aluno) {
        System.out.println("Recebendo aluno para cadastro: " + aluno);
        Aluno novoAluno = alunoRepository.save(aluno);
        System.out.println("Aluno salvo: " + novoAluno);
        return new ResponseEntity<>(novoAluno, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Aluno>> listarAlunos() {
        List<Aluno> alunos = alunoRepository.findAll();
        System.out.println("Alunos encontrados: " + alunos);
        return new ResponseEntity<>(alunos, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirAluno(@PathVariable String id) {
        System.out.println("Tentando excluir aluno com id: " + id);
        if (alunoRepository.existsById(id)) {
            alunoRepository.deleteById(id);
            System.out.println("Aluno com id " + id + " excluído com sucesso.");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            System.out.println("Aluno com id " + id + " não encontrado.");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Aluno> atualizarAluno(@PathVariable String id, @RequestBody Aluno alunoAtualizado) {
        System.out.println("Tentando atualizar aluno com id: " + id);
        if (alunoRepository.existsById(id)) {
            alunoAtualizado.setId(id); // Garante que o ID não seja alterado
            Aluno alunoSalvo = alunoRepository.save(alunoAtualizado);
            System.out.println("Aluno atualizado: " + alunoSalvo);
            return new ResponseEntity<>(alunoSalvo, HttpStatus.OK);
        } else {
            System.out.println("Aluno com id " + id + " não encontrado.");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}