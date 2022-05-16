import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Experiencia } from '../modelo/experiencia';

@Component({
  selector: 'app-updateExp',
  templateUrl: './updateExp.component.html',
  styleUrls: ['./updateExp.component.css']
})
export class UpdateExpComponent implements OnInit {


  experiencia: Experiencia = new Experiencia();
  constructor(private router: Router, private api:ApiService) { 
  
  }

  ngOnInit(): void {
  this.Editar();
   
  }

  Editar(){
    let id:any = localStorage.getItem("id");
    this.api.getExperienciaId(+id).subscribe(data=>{
      this.experiencia=data;
    })
  }

  Actualizar(experiencia:Experiencia){
    this.api.updateExperiencia(experiencia).subscribe(data =>{
      this.experiencia=data;
      alert("Actualizado con éxito!");
      this.router.navigate(['/perfil']);
    })
  }

}

