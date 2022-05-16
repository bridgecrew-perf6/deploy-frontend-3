import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Soft } from '../modelo/soft';

@Component({
  selector: 'app-updatesoft',
  templateUrl: './updatesoft.component.html',
  styleUrls: ['./updatesoft.component.css']
})
export class UpdatesoftComponent implements OnInit {
   soft: Soft = new Soft;
  constructor(public api: ApiService, public router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id:any = localStorage.getItem("id");
    this.api.getSoftId(+id).subscribe(data=>{
      this.soft=data;
    })
  }

  Actualizar(soft:Soft){
    this.api.updateSoft(soft).subscribe(data =>{
      this.soft=data;
      alert("Actualizado con éxito!");
      this.router.navigate(['/perfil']);
    })
  }

}
