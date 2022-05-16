import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tecnologias } from '../modelo/tecnologias';

@Component({
  selector: 'app-updatetec',
  templateUrl: './updatetec.component.html',
  styleUrls: ['./updatetec.component.css']
})
export class UpdatetecComponent implements OnInit {
  tecnologia: Tecnologias = new Tecnologias;

  constructor(public api:ApiService, public router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id:any = localStorage.getItem("id");
    this.api.getTecnologiaId(+id).subscribe(data=>{
      this.tecnologia=data;
    })
  }

  Actualizar(tecnologia:Tecnologias){
    this.api.updateTecnologia(tecnologia).subscribe(data =>{
      this.tecnologia=data;
      alert("Actualizado con éxito!");
      this.router.navigate(['/perfil']);
    })
  }
}
