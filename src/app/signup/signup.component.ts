import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario='';
  password='';
  form: FormGroup;
  

  constructor(public formBuilder:FormBuilder,private authservice:AuthService, public router:Router){ 
    this.usuario = '';
    this.password = '';
    this.form= this.formBuilder.group({ 
      usuario:  ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(8)]]
   })
  }

ngOnInit(){
  this.usuario = '';
    this.password = '';
  this.form= this.formBuilder.group({ 
    usuario:  ['',Validators.required],
    password: ['',[Validators.required, Validators.minLength(8)]]
 })
}


get Password(){
 return this.form.get('password');
}

get PasswordValid(){
  return this.Password?.touched &&  this.Password?.valid;
}

get Usuario(){
  return this.form.get('usuario');
}

get UsuarioValid(){
  return this.Usuario?.touched && this.Usuario?.valid;
}


register(){
  if (this.form.invalid) {
   return ;
  

  } 
  this.authservice.register(this.form.get('usuario')?.value, this.form.get('password')?.value)
  .subscribe((response) =>{
    this.router.navigate(['/login']);
    alert("Gracias por registrarse!");
  }, err =>{
  alert("El usuario ya existe");
  this.router.navigate(['/']);
}
 );
}
}
