# 📚 Cadastro de Alunos

![Java](https://img.shields.io/badge/Java-17-orange) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.4-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-6.0-darkgreen) ![License](https://img.shields.io/badge/License-MIT-yellow)

Bem-vindo ao **Cadastro de Alunos**, um projeto que combina um backend em **Java com Spring Boot** e um frontend em **React** para gerenciar o cadastro de alunos. Este sistema permite criar, listar, editar e excluir alunos, com os dados armazenados em um banco **MongoDB**. A interface é moderna, responsiva e inclui validações, animações e notificações para uma melhor experiência do usuário.

---

## 🚀 Funcionalidades

- **Criar Aluno**: Cadastre novos alunos com nome, telefone, email e endereço.
- **Listar Alunos**: Visualize todos os alunos em cards organizados em uma grade.
- **Editar Aluno**: Atualize os dados de um aluno existente.
- **Excluir Aluno**: Remova alunos com confirmação.
- **Validação de Formulário**: Garante que os campos sejam preenchidos corretamente (ex.: email válido).
- **Notificações**: Feedback visual elegante com `react-toastify` para ações de sucesso ou erro.
- **Animações**: Efeitos suaves de entrada e saída nos cards usando `framer-motion`.
- **Design Responsivo**: Interface adaptável para desktops e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Java 17**: Linguagem de programação.
- **Spring Boot 3.2.5**: Framework para construção da API REST.
- **Spring Data MongoDB**: Integração com o banco MongoDB.
- **Maven**: Gerenciador de dependências.

### Frontend
- **React 18.2.0**: Biblioteca JavaScript para construção da interface.
- **Axios**: Cliente HTTP para comunicação com a API.
- **React Icons**: Ícones para botões e cards.
- **Framer Motion**: Animações suaves.
- **React Toastify**: Notificações elegantes.
- **CSS**: Estilização personalizada.

### Banco de Dados
- **MongoDB 6.0**: Banco NoSQL para armazenamento dos dados dos alunos.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [Node.js 16+](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

---

## ⚙️ Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clonar o Repositório
```bash
git clone [https://github.com/seu-usuario/cadastro-alunos.git](https://github.com/duduslugee/cadastro-alunos.git)
cd cadastro-alunos
```

### 2. Configurar o Banco de Dados (MongoDB)
1. Inicie o MongoDB localmente:
```bash
mongod
```
2. Crie um banco chamado alunosdb (o Spring Boot criará a coleção alunos automaticamente).
   
### 3. Configurar o Backend
1. Navegue até o diretório do backend:
```bash
cd backend
```
2. Configure a conexão com o MongoDB no arquivo backend/src/main/resources/application.properties:
```bash
spring.data.mongodb.uri=mongodb://localhost:27017/alunosdb
```
3. Compile e execute o backend:
```bash
mvn clean install
mvn spring-boot:run
```
O backend estará rodando em http://localhost:8080.

### 4. Configurar o Frontend
1. Navegue até o diretório do frontend:
```bash
cd frontend
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o frontend:
```bash
npm start
```
4. O frontend estará rodando em http://localhost:3000.

   
### 🌐 Uso
1. Acesse o frontend em http://localhost:3000.
2. Use o formulário para cadastrar um novo aluno preenchendo os campos: Nome, Telefone, Email e Endereço.
3. Visualize os alunos cadastrados em cards na seção "Alunos Cadastrados".
4. Clique em Editar para atualizar os dados de um aluno ou em Excluir para removê-lo.
5. O sistema exibirá notificações para confirmar ações ou informar erros.



### 🖼️ Capturas de Tela

Formulário de Cadastro/Edição

![image](https://github.com/user-attachments/assets/d96bcb2f-aaa7-41c9-a8e6-99e293f96e1f)


### 📂 Estrutura do Projeto
```
cadastro-alunos/
├── backend/                    # Código do backend (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── seuusuario/
│   │   │   │           └── cadastroalunos/
│   │   │   │               ├── config/
│   │   │   │               │   └── CorsConfig.java
│   │   │   │               ├── controller/
│   │   │   │               │   └── AlunoController.java
│   │   │   │               ├── model/
│   │   │   │               │   └── Aluno.java
│   │   │   │               ├── repository/
│   │   │   │               │   └── AlunoRepository.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml
├── frontend/                   # Código do frontend (React)
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── public/
└── README.md
```

### 🔧 Endpoints da API
```
Método	  Endpoint	           Descrição
GET	  /api/alunos	           Lista todos os alunos
POST	  /api/alunos	           Cadastra um novo aluno
PUT	  /api/alunos/{id}	   Atualiza um aluno
DELETE	  /api/alunos/{id}	   Exclui um aluno
```

### 🤝 Contribuição
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Faça commit das suas alterações (git commit -m 'Adiciona nova feature').
4. Envie para o repositório remoto (git push origin feature/nova-feature).
5. Abra um Pull Request.
