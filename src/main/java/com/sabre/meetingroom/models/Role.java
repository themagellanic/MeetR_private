package com.sabre.meetingroom.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class Role {

    @Id
    private Integer Id;
    private Integer employeeId;
    private ERole role;

    public Role(){

    }
    public Role(ERole role){
        this.role=role;
    }
    public Integer getId(){
        return Id;
    }
    public void setId(Integer id){
        this.Id=id;
    }
    public ERole getRole(){
        return role;
    }
    public void setRole(ERole role){
        this.role=role;
    }
}
