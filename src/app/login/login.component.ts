import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginAuthenticationService } from '../services/login-authentication.service';
import { Router,ActivatedRoute} from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {};
  loading = false;
  authMessage : string;

  constructor(private loginAuthService : LoginAuthenticationService, private router: Router, private route :ActivatedRoute) {}

  ngOnInit() {

  }

  onSubmit(userlogin : NgForm){
    if(userlogin.valid){
        this.loading = true; // validation in progress
        console.log(this.login);
        let user = {"userId" : this.login.username, "password" : this.login.password};
        this.loginAuthService.authenticateUserLogin (user)
        .subscribe(
        response => {
            this.loading=false;
            console.log("res received authentication service" + JSON.stringify(response));
            if (response !=null && response.authSuccess) {
              this.authMessage=null;
              //if auth success route according to the role
              if(response.role == "KAPY_Surveyor"){
                console.log("inside KAPY survey'");
                this.router.navigateByUrl('/farmerApplication');
              }
              else if(response.role == "KAPY_Nursery"){
                console.log("Inside KAPY approver");
                this.router.navigateByUrl('/approveNursery');
              }            
            }else{
                this.authMessage = response.message;
            }
         });
     }
  }

}
