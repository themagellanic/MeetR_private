package com.sabre.meetingroom.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "request")
public class Request {

    @Id
    private String id;
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    private String location;
    private Date date;
    private String costCentre;
    private String purpose;
    private Integer numberOfPeople;
    private Integer employeeId;
    private EStatus status;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCostCentre() {
        return costCentre;
    }

    public void setCostCentre(String costCentre) {
        this.costCentre = costCentre;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public Integer getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(Integer numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public EStatus getStatus() {
        return status;
    }

    public void setStatus(EStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Request{" +
                "id='" + id + '\'' +
                ", token='" + token + '\'' +
                ", location='" + location + '\'' +
                ", date=" + date +
                ", costCentre='" + costCentre + '\'' +
                ", purpose='" + purpose + '\'' +
                ", numberOfPeople=" + numberOfPeople +
                ", employeeId=" + employeeId +
                ", status=" + status +
                '}';
    }
}
