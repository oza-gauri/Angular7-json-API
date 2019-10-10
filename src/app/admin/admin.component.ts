import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GetUserService } from '../getuser.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:object;
  constructor(private authService: AuthService, private router: Router, private data: GetUserService) { }
  //function to get user data
  ngOnInit() {
    this.data.getUsers().subscribe((data:any) => {             
this.users = data
           // console.log(this.users);
          });
  }
  //function for logout
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }  
}
