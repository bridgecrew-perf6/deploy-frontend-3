import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tecnologias } from '../modelo/tecnologias';

@Component({
  selector: 'app-add-tec',
  templateUrl: './add-tec.component.html',
  styleUrls: ['./add-tec.component.css']
})
export class AddTecComponent implements OnInit {
   
  tecnologia:Tecnologias = new Tecnologias();
  constructor(public api: ApiService, public router:Router) { }

  ngOnInit(): void {
  }

  GuardarTec(){
    this.api.createTecnologias(this.tecnologia)
    .subscribe(data=>{
      alert("Se agregó con éxito!");
      this.router.navigate(['/perfil']);
    })
  }

}
