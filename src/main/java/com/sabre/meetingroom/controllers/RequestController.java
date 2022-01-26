package com.sabre.meetingroom.controllers;

import com.sabre.meetingroom.models.RequestModel;
import com.sabre.meetingroom.models.Role;
import com.sabre.meetingroom.repository.RequestRepository;
import com.sabre.meetingroom.services.RequestService;
import org.hibernate.Criteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;
    @Autowired
    private Role roles;
    @Autowired
    RequestService requestService;
    @PostMapping("/addRequest")
    public String saveRequest(@RequestBody RequestModel request){

        requestRepository.save(request);
        return "Added request with id "+request.getEmployeeId();
    }
    @GetMapping("/allRequestsToAdmin")
    public List<RequestModel> fetchRequest(){
        Query query= new Query();
        query.addCriteria(new Criteria.where("status").is("PENDING_STATUS"));
        List<RequestModel> list= MongoTemplate.find(query,RequestModel.class);
        return list;
    }
//    @GetMapping("/myAllRequest")
//    public List<RequestModel> fetchMyRequest(@RequestBody RequestModel req){
//       // return requestRepository.findAllById(req.getEmployeeId());
//    }
    @PostMapping("/changeStatus")
    public void changeStatus(@RequestBody String status){

    }

    @GetMapping("/processedRequest")
    public List<RequestModel> processedRequest(){

        return requestService.processedRequest();
    }

//    @GetMapping("/home")
//    public String home(){
//        return "index page";
//    }
//
//    @PostMapping("/request")
//    public RequestModel request(@RequestBody RequestModel req){
//        return req;
//    }
}
