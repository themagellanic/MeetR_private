package com.sabre.meetingroom.repository;

import com.sabre.meetingroom.models.Url;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UrlRepository extends MongoRepository<Url,String> {
    //Optional<Url> findByToken(String token);
}
