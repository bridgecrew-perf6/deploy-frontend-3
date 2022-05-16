import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Soft } from '../modelo/soft';

@Component({
  selector: 'app-addsoft',
  templateUrl: './addsoft.component.html',
  styleUrls: ['./addsoft.component.css']
})
export class AddsoftComponent implements OnInit {

  soft: Soft = new Soft;

  constructor(public api:ApiService,public router:Router) { }

  ngOnInit(): void {
  }
  GuardarSoft(){
    this.api.createSoft(this.soft)
    .subscribe(data=>{
      alert("Se agregó con éxito!");
      this.router.navigate(['/perfil']);
    })
  }

}
