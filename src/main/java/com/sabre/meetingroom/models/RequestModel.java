package com.sabre.meetingroom.models;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.security.Timestamp;

@Document(collection = "request")
public class RequestModel {
    @Id
    private String employeeId;
    private String Food;

    private String location;
    private long numberOfPeople;
    private EStatus status=EStatus.PENDING_STATUS;
    @CreationTimestamp
    private Timestamp timestamp;

    //variable having time using UTC timezone to be stored
    public RequestModel(String employeeId,String location,long numberOfPeople,String food,Timestamp timestmp){
        super();
        this.employeeId=employeeId;
        this.location=location;
        this.numberOfPeople=numberOfPeople;
        this.Food=food;
        this.timestamp=timestmp;

    }
    public RequestModel(){
        super();
    }
    public String getEmployeeId(){
        return  this.employeeId;
    }
    public String getLocation(){
        return this.location;
    }
    public long getNumberOfPeople(){
        return this.numberOfPeople;
    }
    public EStatus getStatus(){
        return this.status;
    }
    public void setEmployeeId(String empId){
        this.employeeId=empId;
    }
    public void setLocation(String location){
        this.location=location;
    }
    public void setNumberOfPeople(long numberOfPeople){
        this.numberOfPeople=numberOfPeople;
    }
    public void setStatus(EStatus status){
        this.status=status;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public Boolean getFood() {
        return Food;
    }

    public void setFood(Boolean food) {
        Food = food;
    }
}
