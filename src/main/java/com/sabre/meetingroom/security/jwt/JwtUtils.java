package com.sabre.meetingroom.security.jwt;

import com.sabre.meetingroom.security.services.UserDetailsImpl;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.nio.ByteBuffer;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${sabre.app.jwtSecret}")
    private String jwtSecret;

    @Value("${sabre.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {

        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }
    public String urlToken(Integer empId){
        String str=Integer.toString(empId);
        Date date = new Date();
        Timestamp ts=new Timestamp(date.getTime());
        String temp=ts.toString();
        //System.out.println(ts);
        List<String> list=new ArrayList<>();
        list.add("the-bro-grammers");
        list.add("spider-is-peter");
        list.add("engineer-are-op");
        list.add("candle-blasters");
        list.add("strict-robot-policy");
        list.add("salary-credited");
        list.add("binary-spider");
        list.add("boolean-monkey");
        list.add("dijkstra-circle");
        list.add("java-coffee");
        list.add("bug-free-code");
        list.add("code-without-bug");
        list.add("alpha-male");
        list.add("sabre-ciphers");
        list.add("sleepless-developer");
        list.add("null-deference");
        list.add("stack-smashers");
        list.add("beatles-queue");
        list.add("quarantine-engineer");
        list.add("pointer-free-world");
        list.add("python-is-not-java");
        list.add("pointer-to-pointer");
        list.add("exception-handler");
        list.add("cat-in-the-code");
        list.add("algorithm-panda");
        list.add("bit-byte");
        list.add("loop-to-infinity");
        list.add("scratch-to-infinity");
        list.add("clean-code");
        list.add("tensorflow-brain");
        list.add("buffer-overflow");
        list.add("bellman-ford-gate");
        list.add("prims-short-path");
        list.add("doodle-koala");
        list.add("html-programmers");
        list.add("keyboard-shortcuts");

        return list.get(empId);
    }
    public String uuidGeneration(){
        UUID uuid = UUID.randomUUID();
        long l = ByteBuffer.wrap(uuid.toString().getBytes()).getLong();
        return Long.toString(l, Character.MAX_RADIX);
    }
}

