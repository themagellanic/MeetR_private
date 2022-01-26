package com.sabre.meetingroom.repository;

import com.sabre.meetingroom.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends MongoRepository<Role,Long> {

    Optional<Role> findByEmpId(String empId);
}
