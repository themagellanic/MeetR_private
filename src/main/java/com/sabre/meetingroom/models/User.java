package com.sabre.meetingroom.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;



import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Document(collection = "user")
public class User {

    @Id
   // @Indexed(name="parag",unique=true,sparse=true)
    private Long Id;

    @NotBlank
    @Size(max = 6)
    @Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
    private String username;

    @NotBlank
    @Size(max=50)
    @Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
    private String email;

    @NotBlank
    @Size(max=120)
    private String password;



    public User(){

    }
    public User(String username,String email,String password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



}
