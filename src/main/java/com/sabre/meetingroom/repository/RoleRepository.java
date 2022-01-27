package com.sabre.meetingroom.repository;

import com.sabre.meetingroom.models.ERole;
import com.sabre.meetingroom.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}

