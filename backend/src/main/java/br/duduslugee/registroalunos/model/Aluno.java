package br.duduslugee.registroalunos.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "alunos")
public class Aluno {
    @Id
    private String id;
    private String nome;
    private String telefone;
    private String email;
    private String endereco;

    // Construtor vazio (necessário para o Jackson)
    public Aluno() {
    }

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    // toString para depuração
    @Override
    public String toString() {
        return "Aluno{" +
                "id='" + id + '\'' +
                ", nome='" + nome + '\'' +
                ", telefone='" + telefone + '\'' +
                ", email='" + email + '\'' +
                ", endereco='" + endereco + '\'' +
                '}';
    }
}