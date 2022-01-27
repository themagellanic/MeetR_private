package com.sabre.meetingroom.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "url")
public class Url {

    @Id
    private String id;
    private String requestToken;
    private String mappedToken;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRequestToken() {
        return requestToken;
    }

    public void setRequestToken(String requestToken) {
        this.requestToken = requestToken;
    }

    public String getMappedToken() {
        return mappedToken;
    }

    public void setMappedToken(String mappedToken) {
        this.mappedToken = mappedToken;
    }
}
