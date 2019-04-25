import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProdService } from '../../services/prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
  messageClass;
  message2;
  messageClass2;
  processing = false;
  form: FormGroup;


  constructor(
    private form_builder: FormBuilder,
    private router: Router,
    private auth_service: AuthService,
    private prod_service: ProdService
  ) {
      this.crear_form();

   }

   crear_form(){
     this.form = this.form_builder.group({
       username: ['pruebauser06', Validators.required],
       password: ['pruebapass', Validators.required]
     })
   }

   habilitarForm(){
     this.form.controls['username'].enable();
     this.form.controls['password'].enable();
   }

   deshabilitarForm(){
     this.form.controls['username'].disable();
     this.form.controls['password'].disable();
   }

   onLoginSubmit(){
     this.processing = true;
     this.deshabilitarForm();
     const user = {
       username: this.form.get('username').value,
       password: this.form.get('password').value
     }

     this.auth_service.login(user).subscribe(data => {
       console.log(data);
       this.message = data.message;
       if (!data.success){
         this.messageClass = 'alert alert-danger';
         this.processing = false;
         this.habilitarForm();
       }else{
         this.messageClass = 'alert alert-success';
         setTimeout(() => {
             this.router.navigate(['/showcase']);
         }, 2000)
       }
     })

   }

  ngOnInit() {
    this.auth_service.createUser().subscribe(data => {
      this.message = data.message;
      if (!data.success) this.messageClass = 'alert alert-danger';
      else this.messageClass = 'alert alert-success';
    })

    this.prod_service.createManyProducts().subscribe(data => {
      //console.log(data);
      //this.message2 = data.message;
      //if (!data.success) this.messageClass = 'alert alert-danger';
      //else this.messageClass = 'alert alert-success';
    })
  }
}
