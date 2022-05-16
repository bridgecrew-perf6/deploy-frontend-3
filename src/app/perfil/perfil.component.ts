import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataset } from 'chart.js';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Educacion } from '../modelo/educacion';
import { Experiencia } from '../modelo/experiencia';
import { Persona } from '../modelo/persona';
import { Proyectos } from '../modelo/proyectos';
import { Tecnologias } from '../modelo/tecnologias';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  experiencias: Experiencia[] = [];
  educaciones:Educacion[] = [];
  tecnologias:Tecnologias[]=[];
  personas:Persona[]=[];
  proyectos:Proyectos[]=[];

  constructor(public authservice:AuthService, private api:ApiService,public router:Router){}

  ngOnInit(): void {
    this.api.getExperiencia().subscribe(data=>{
      this.experiencias=data;
    });
    this.api.getEducacion().subscribe(data=>{
      this.educaciones=data;
    });
    this.api.getTecnologias().subscribe(data=>{
      this.tecnologias=data;

  });
  this.api.getPersona().subscribe(data=>{
    this.personas=data;

});
this.api.getProyectos().subscribe(data=>{
  this.proyectos=data;

});
}
  logout(){
    this.authservice.logout();
  }

  Editar(experiencia:Experiencia):void{
    localStorage.setItem("id",experiencia.id.toString());
    this.router.navigate(['/edit']);
  }
  EditarEducacion(educacion:Educacion):void{
    localStorage.setItem("id",educacion.id.toString());
    this.router.navigate(['/educacion']);
  }
  EditarPersona(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(['/personas']);
  }
  EditarProyectos(proyecto:Proyectos):void{
    localStorage.setItem("id",proyecto.id.toString());
    this.router.navigate(['/proyectos']);
  }
  
  AgregarExp(){
    this.router.navigate(['/addexp']);
  }
  AgregarEdu(){
    this.router.navigate(['/addedu']);
  }
  AgregarProj(){
    this.router.navigate(['/addproj']);
  }

  Delete(experiencia:Experiencia){
    this.api.deleteExperiencia(experiencia)
    .subscribe(data=>{
      this.experiencias=this.experiencias.filter(ex=>ex!==experiencia);
      alert("Se eliminó con éxito!");
    })
  }
  DeleteEduc(educacion:Educacion){
    this.api.deleteEducacion(educacion)
    .subscribe(data=>{
      this.educaciones=this.educaciones.filter(ed=>ed!==educacion);
      alert("Se eliminó con éxito!");
    })
  }
  DeleteProj(proj:Proyectos){
    this.api.deleteProj(proj)
    .subscribe(data=>{
      this.proyectos=this.proyectos.filter(pr=>pr!==proj);
      alert("Se eliminó con éxito!");
     })
  }
  ProjUrl(){
    window.open('https://github.com/gcastellini/YoProgramo-gcastellini')
  }
}
function id(id: any, arg1: string) {
  throw new Error('Function not implemented.');
}

