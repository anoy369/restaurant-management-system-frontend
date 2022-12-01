import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstant } from 'src/app/shared/global-constant';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup;
  responseMessage:any;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private ngxService: NgxUiLoaderService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[null,[Validators.required,Validators.pattern(GlobalConstant.emailRegex)]],
      password:[null,[Validators.required]],
    })
  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.loginForm.value
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      password: formData.password,
    }
    this.userService.login(data).subscribe((response:any)=> {
      this.ngxService.stop();
      this.dialogRef.close();
      localStorage.setItem('token',response.token)
      this.router.navigate(['/cafe/dashboard'])
    },(error) => {
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message
      } else {
        this.responseMessage = GlobalConstant.genericError
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstant.error)
    })
  }
  
  forgotPassword(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "500px"
    this.dialog.open(ForgotPasswordComponent,dialogConfig)
  }

}
