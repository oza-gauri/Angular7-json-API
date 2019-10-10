import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  users: Object;
  email;
  password;
  error = '';
  msg:any;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  //function for validation
  ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z0-9\s]+$')]]
  });
  }
  //function for login controls
  get formControls() { 
    return this.loginForm.controls;
   }
   //function for login
  login(){
    this.isSubmitted = true;
    this.email=this.loginForm.value.email;
    this.password=this.loginForm.value.password;  
    if(this.loginForm.invalid){
      return;      
    }
  //function for authentication  
    this.authService.getusers().subscribe((data:any )=> {
      this.users = data
      for( var val of data){  
        if (val['username']==this.email && val['password']==this.password)
        {
          this.authService.login(this.loginForm.value);
          localStorage.setItem('username',this.email);
          this.router.navigateByUrl('/admin');
        }
        else{
          this.msg="Invalid Credentials";
        }
      }   
    });
  }  
}