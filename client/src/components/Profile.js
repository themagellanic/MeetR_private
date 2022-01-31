import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container bg-dark">

<div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span class="name mt-3">{currentUser.email}</span> <span class="idd">@{currentUser.username}</span>
            
            <div className="badge bg-primary text-wrap" style={{}}><ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> </div>
            
            <div class="text mt-3"> <span>User Profile </span> </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
            
        </div>
    </div>
</div>

  
      
    </div>
  );
};

export default Profile;
