import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
  messageClass;
  processing = false;
  form: FormGroup;


  constructor(
    private form_builder: FormBuilder,
    private router: Router
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
   }

  ngOnInit() {
  }

}
