import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modelo/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario='';
  password='';
  form: FormGroup;
  user:User = new User();

  constructor(public formBuilder:FormBuilder,private authservice:AuthService, public router:Router){ 
    this.usuario = '';
    this.password = '';
    this.form= this.formBuilder.group({ 
      usuario:  ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(8)]],
      headers:['']
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


onEnviar(){
  if (this.form.invalid) {
    return;
  } 
  this.authservice.login(this.form.get('usuario')?.value, this.form.get('password')?.value)
  .subscribe((response) =>{
    this.router.navigate(['/perfil']);
  });

}




}
