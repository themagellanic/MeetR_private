package com.sabre.meetingroom.controllers;

import com.sabre.meetingroom.models.EStatus;
import com.sabre.meetingroom.models.Request;
import com.sabre.meetingroom.models.Url;
import com.sabre.meetingroom.repository.RequestRepository;
import com.sabre.meetingroom.repository.UrlRepository;
import com.sabre.meetingroom.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/request")
public class RequestController {

    @Autowired
    RequestRepository requestRepository;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UrlRepository urlRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @PostMapping("/submit")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String onSubmit(@Valid @RequestBody Request request){
        Request req = new Request();
        req.setLocation(request.getLocation());
        req.setNumberOfPeople(request.getNumberOfPeople());
        req.setEmployeeId(request.getEmployeeId());
        req.setCostCentre(request.getCostCentre());
        req.setStatus(EStatus.PENDING_STATUS);
        String token=jwtUtils.urlToken(request.getEmployeeId());
        //EStatus status= EStatus.PENDING_STATUS;
        req.setToken(token);
        requestRepository.save(req);
        Url url=new Url();
        url.setMappedToken(token);
        url.setRequestToken("12345");
        urlRepository.save(url);
        return "request submitted successfully."+token;
    }

    @GetMapping("/{requestToken}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public void urlMapper(@PathVariable String requestToken){
        Url url=new Url();
        url.setRequestToken(requestToken);
        //urlRepository.findOne()
    }
    @GetMapping("/requests")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Request> requestsList(){
        Query query= new Query();
        query.addCriteria(Criteria.where("status").is("PENDING_STATUS"));
        List<Request> list = mongoTemplate.find(query,Request.class);
        return list;

    }

    @PostMapping("/{requestToken}/{status}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public String changeStatus(@PathVariable("requestToken") String reqToken,@PathVariable("status") String status){
            Query query = new Query();
            query.addCriteria(Criteria.where("token").is(reqToken));
            Request req= mongoTemplate.findOne(query,Request.class);
            System.out.println(req);
            if(status.equals("approved")){
                req.setStatus(EStatus.APPROVED);
            }
            else if(status.equals("declined")){
                req.setStatus(EStatus.DECLINED);
            }
            requestRepository.save(req);
            return "updated successfully";
    }



}
