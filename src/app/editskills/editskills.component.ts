import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Idiomas } from '../modelo/idiomas';
import { Soft } from '../modelo/soft';
import { Tecnologias } from '../modelo/tecnologias';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  tecnologias: Tecnologias[]=[];
  tec: Tecnologias = new Tecnologias;
  softskills : Soft[]=[];
  soft: Soft = new Soft;
  idiomas: Idiomas[]=[];
  lang: Idiomas = new Idiomas;
  constructor(public api:ApiService, public router:Router, public authservice:AuthService) { }

  ngOnInit(): void {
    this.api.getTecnologias().subscribe(data=>{
      this.tecnologias=data;
  });
  this.api.getSoft().subscribe(data=>{
    this.softskills=data;
  });
  this.api.getLang().subscribe(data=>{
    this.idiomas=data;
  });
  }
  
  Agregar(){
    this.router.navigate(['/addtec']);
  }
  AgregarLang(){
    this.router.navigate(['/addlang']);
  }
  AgregarSoft(){
    this.router.navigate(['/addsoft']);
  }
  ObtenerTec(tec:Tecnologias):void{
    localStorage.setItem("id",tec.id.toString());
      this.router.navigate(['/tecnologia']);
    }
    ObtenerSoft(soft:Soft):void{
      localStorage.setItem("id",soft.id.toString());
        this.router.navigate(['/soft']);
      }
      ObtenerLang(lang:Idiomas):void{
        localStorage.setItem("id",lang.id.toString());
          this.router.navigate(['/idiomas']);
        }
        Delete(tecnologia:Tecnologias){
          this.api.deleteTecnologias(tecnologia)
          .subscribe(data=>{
            this.tecnologias=this.tecnologias.filter(t=>t!==tecnologia);
            alert("Se eliminó con éxito!");
          })
        }

        DeleteSoft(soft:Soft){
          this.api.deleteSoft(soft)
          .subscribe(data=>{
            this.softskills=this.softskills.filter(s=>s!==this.soft);
            alert("Se eliminó con éxito!");
          })
        }
        DeleteLang(lang:Idiomas){
          this.api.deleteLang(lang)
          .subscribe(data=>{
            this.idiomas=this.idiomas.filter(i=>i!==this.lang);
            alert("Se eliminó con éxito!");
          })
        }



  }
   

