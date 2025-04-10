package br.duduslugee.registroalunos.repository;

import br.duduslugee.registroalunos.model.Aluno;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlunoRepository extends MongoRepository<Aluno, String> {
}