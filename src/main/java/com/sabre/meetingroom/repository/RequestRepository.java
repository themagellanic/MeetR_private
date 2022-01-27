package com.sabre.meetingroom.repository;

import com.sabre.meetingroom.models.Request;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RequestRepository extends MongoRepository<Request,String> {
    Optional<Request> findByToken(String token);
}
