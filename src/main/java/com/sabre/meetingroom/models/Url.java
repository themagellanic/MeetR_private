package com.sabre.meetingroom.models;

import org.springframework.data.annotation.Id;
import javax.persistence.GeneratedValue;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "url")
public class Url {

    @Id
    @GeneratedValue(generator = CUSTOM_GENERATOR)
    @GenericGenerator(name = CUSTOM_GENERATOR, strategy = CUSTOM_ID_GENERATOR)
    private String id;

    private String originalUrl;

    public Url(){

    }
    public Url(String originalUrl){
        this.originalUrl = originalUrl;
    }
    public String getId(){
        return id;
    }
    public void setId(String id){
        this.id=id;
    }

    public String getOriginal() {
        return originalUrl;
    }

    public void setOriginal(String original) {
        this.originalUrl = original;
    }


}
