import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  validCredentials:boolean = true
  constructor(private formBuild:FormBuilder,private router:Router,private authService:AuthserviceService){
    this.loginForm = this.formBuild.group({
      username: ['',[
        Validators.required
      ]],
      password: ['',[
        Validators.required
      ]]
    })
  }

  ngOnInit():void {

    
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  toSignup() {
    this.router.navigate(['signup'])
  }
  onsubmit()
  {
    this.authService.authenticateUser(this.loginForm.value)
  }

}
