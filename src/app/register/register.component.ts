import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { GetUserService } from '../getuser.service';
import { GetdataService } from '../getdata.service';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public imagesUrl;

   value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: 'Very poor'},
      {value: 2},
      {value: 3, legend: 'Fair'},
      {value: 4},
      {value: 5, legend: 'Average'},
      {value: 6},
      {value: 7, legend: 'Good'},
      {value: 8},
      {value: 9, legend: 'Excellent'}
    ]
  };
        registarationInfo = [];
        data = {};
        profileFormValue: any;
        formstatus: boolean;
        registrationForm: FormGroup;
        GetdataService:any;

        submit(event) {
        if (this.profileForm.valid) {
        this.profileFormValue = this.profileForm.value;      
        this.registarationInfo.push(this.profileForm);      
        console.log(this.registarationInfo);
        event.preventDefault();
        this.formstatus = true;
        this.profileForm.reset();

        this.getdataservice.enroll(this.profileFormValue)
        .subscribe(
          data=>console.log('success',data),
          error=>console.log('error',error)
        );
          }
        } 
        profileForm = this.fb.group({
        firstName: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
        lastName: ['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
        comments:[''],
        ratings:['']               
      });
        constructor(private fb: FormBuilder, private _getuser:GetUserService,private getdataservice:GetdataService) { }
        onSubmit () {
        console.warn(this.profileForm.value);
        }
        users
        ngOnInit() {
        this._getuser.getUsers().subscribe((data:any) => {        
        // console.log(data['data'][0]); 
        this.users = data
        console.log(this.users);
        });

        this.imagesUrl = [
          './assets/img_mountains_wide.jpg',
          './assets/img_nature_wide.jpg',
          './assets/img_snow_wide.jpg',
          './assets/img1.jpg',
          './assets/img2.jpg',
          './assets/img3.jpg'
          ];
      }
   }
