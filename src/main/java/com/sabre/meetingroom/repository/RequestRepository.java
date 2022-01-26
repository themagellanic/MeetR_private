package com.sabre.meetingroom.repository;


import com.sabre.meetingroom.models.RequestModel;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

@Document(collection = "request")
public interface RequestRepository extends MongoRepository<RequestModel,Integer> {


}
