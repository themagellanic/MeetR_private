package com.sabre.meetingroom.controllers;

import com.sabre.meetingroom.models.EStatus;
import com.sabre.meetingroom.models.Request;
import com.sabre.meetingroom.repository.RequestRepository;
import com.sabre.meetingroom.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/request")
public class RequestController {

    @Autowired
    RequestRepository requestRepository;

    @Autowired
    JwtUtils jwtUtils;

//    @Autowired
//    UrlRepository urlRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @PostMapping("/submit")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> onSubmit(@Valid @RequestBody Request request){
        Request req = new Request();
        req.setLocation(request.getLocation());//done
        req.setNumberOfPeople(request.getNumberOfPeople());//done
        req.setEmployeeId(request.getEmployeeId());//left
        req.setCostCentre(request.getCostCentre());//done
        req.setStatus(EStatus.PENDING_STATUS);//done
        req.setBeverage(request.getBeverage());//done
        req.setFood(request.getFood());//done
        req.setTime(request.getTime());//done
        req.setDate(request.getDate());//done
        Random random = new Random();
        int t=random.nextInt(35);

        //String token=jwtUtils.urlToken(request.getEmployeeId());
        //EStatus status= EStatus.PENDING_STATUS;
        String token=jwtUtils.urlToken(t)+"-"+jwtUtils.uuidGeneration();
        req.setToken(token);
        requestRepository.save(req);
        return ResponseEntity.of(Optional.of(req));
    }

    @GetMapping("/{requestToken}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> urlMapper(@PathVariable String requestToken){
//        Url url=new Url();
//        url.setRequestToken(requestToken);
//        //urlRepository.findOne()
        //System.out.println(requestToken);
        try{
            Query query= new Query();
            query.addCriteria(Criteria.where("token").is(requestToken));
            Request req;
            req=mongoTemplate.findOne(query,Request.class);
            return ResponseEntity.of(Optional.of(req));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No such record exist");
        }
    }
    @GetMapping("/requests")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> requestsList(){
        try {
            Query query = new Query();
            query.addCriteria(Criteria.where("status").is("PENDING_STATUS"));
            List<Request> list = mongoTemplate.find(query,Request.class);
            if(list==null){
                return ResponseEntity.ok().body("No more Requests available");
            }
            return ResponseEntity.of(Optional.of(list));
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong.Try again");
        }



    }

    @PostMapping("/{requestToken}/declined")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<?> changeStatus(@PathVariable("requestToken") String reqToken){
        System.out.println("inside change status");
        Query query = new Query();
            query.addCriteria(Criteria.where("token").is(reqToken));

            Request req= mongoTemplate.findOne(query,Request.class);

            try {
                req.setStatus(EStatus.DECLINED);
            }
            catch(Exception e){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request Can't be processed at the moment.");
            }

            requestRepository.save(req);
            return ResponseEntity.of(Optional.of(req));
    }

    @PostMapping("/edit/{token}")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> editRequest(@Valid @RequestBody Request request,@PathVariable("token") String token){
        try {
            Request req = null;
            Query query = new Query();
            query.addCriteria(Criteria.where("token").is(token));
            req = mongoTemplate.findOne(query, Request.class);
            req.setCost(request.getCost());
            req.setRoomNumber(request.getRoomNumber());
            req.setStatus(EStatus.APPROVED);
            requestRepository.save(req);

            return ResponseEntity.of(Optional.of(req));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }

    }



}
