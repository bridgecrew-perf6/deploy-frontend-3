import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Educacion } from '../modelo/educacion';

@Component({
  selector: 'app-updateeduc',
  templateUrl: './updateeduc.component.html',
  styleUrls: ['./updateeduc.component.css']
})
export class UpdateeducComponent implements OnInit {

  educacion: Educacion = new Educacion;
  constructor(private router: Router, private api:ApiService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id:any = localStorage.getItem("id");
    this.api.getEducacionId(+id).subscribe(data=>{
      this.educacion=data;
    })
  }

  Actualizar(educacion:Educacion){
    this.api.updateEducacion(educacion).subscribe(data =>{
      this.educacion=data;
      alert("Actualizado con éxito!");
      this.router.navigate(['/perfil']);
    })
  }


}
