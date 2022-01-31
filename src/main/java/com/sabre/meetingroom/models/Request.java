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

    private String location;//done
    private Date date;//done
    private String time;//done
    private String costCentre;//done
    private String purpose;//left
    private Integer numberOfPeople;//done
    private Integer employeeId;
    private EStatus status;
    private String food;
    private String beverage;
    private Long cost;
    private String roomNumber;

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getBeverage() {
        return beverage;
    }

    public void setBeverage(String beverage) {
        this.beverage = beverage;
    }

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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "Request{" +
                "id='" + id + '\'' +
                ", token='" + token + '\'' +
                ", location='" + location + '\'' +
                ", date=" + date +
                ", time=" + time +
                ", costCentre='" + costCentre + '\'' +
                ", purpose='" + purpose + '\'' +
                ", numberOfPeople=" + numberOfPeople +
                ", employeeId=" + employeeId +
                ", status=" + status +
                ", food='" + food + '\'' +
                ", beverage='" + beverage + '\'' +
                ", cost=" + cost +
                ", roomNumber='" + roomNumber + '\'' +
                '}';
    }
}
