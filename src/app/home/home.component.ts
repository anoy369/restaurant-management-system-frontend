import { UserService } from 'src/app/services/user.service';
import { SignupComponent } from '../user/signup/signup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../user/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog, private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.userService.checkToken().subscribe((response:any) => {
        this.router.navigate(['/cafe/dashboard'])
      },(error:any)=>{
        console.log(error)
      })
    }
  }

  signUp(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "500px"
    this.dialog.open(SignupComponent,dialogConfig)
  }

  // forgotPassword(){
  //   const dialogConfig = new MatDialogConfig()
  //   dialogConfig.width = "500px"
  //   this.dialog.open(ForgotPasswordComponent,dialogConfig)
  // }

  login(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "500px"
    this.dialog.open(LoginComponent,dialogConfig)
  }

}
