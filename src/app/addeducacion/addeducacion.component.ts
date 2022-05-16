import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Educacion } from '../modelo/educacion';

@Component({
  selector: 'app-addeducacion',
  templateUrl: './addeducacion.component.html',
  styleUrls: ['./addeducacion.component.css']
})
export class AddeducacionComponent implements OnInit {
educacion :Educacion = new Educacion;
  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.api.createEducacion(this.educacion)
    .subscribe(data=>{
      alert("Se agregó con éxito!");
      this.router.navigate(['/perfil']);
    })
  }

}
