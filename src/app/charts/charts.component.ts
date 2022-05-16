import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Tecnologias } from '../modelo/tecnologias';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chart:any =[];
  chartData: any;
  chartLegends:any;
  chartValue: any;
  softData:any;
  softLegends:any;
  softValue:any;
  langchart: any=[];
  langData:any;
  langLegends:any;
  langValue:any;
  softchart: any=[];
  tecnologia: Tecnologias = new Tecnologias;
 
 
  constructor(private api:ApiService, public router: Router,public authservice:AuthService) { }

  ngOnInit(): void {
    this.api.getTecnologias().subscribe((data)=>{
      this.chartData=data;
      this.chartLegends=data.map(function(item) {return item.tecnologia;});
      this.chartValue=data.map(function(item) {return item.nivel;});
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.chartLegends,
          datasets: [
            {
              data: this.chartValue,
              borderColor: '#3e95cd',
              label: 'Nivel',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,

            },
          ],
        },
        options: { 
          scales: {
            y: {
              display:false
            }
          },
          plugins:{
            title:{
              display:true,
              text: 'Hard Skills'
            }
          },
          responsive: false,
          maintainAspectRatio: false
      }
      });
    });
    this.api.getSoft().subscribe((data)=>{
      this.softData=data;
      this.softLegends=data.map(function(item) {return item.skill;});
      this.softValue=data.map(function(item) {return item.nivel;});
      this.softchart = new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.softLegends,
          datasets: [
            {
              data: this.softValue,
              borderColor: '#3e95cd',
              label: 'Nivel',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,

            },
          ],
        },
        options: { 
          scales: {
            y: {
              display:false
            }
          },
          plugins:{
            title:{
              display:true,
              text: 'Soft Skills'
            }
          },
          responsive: false,
          maintainAspectRatio: false
      }
      });
    });
    this.api.getLang().subscribe((data)=>{
      this.langData=data;
      this.langLegends=data.map(function(item) {return item.idioma;});
      this.langValue=data.map(function(item) {return item.nivel;});
      this.langchart = new Chart('canvas3', {
        type: 'bar',
        data: {
          labels: this.langLegends,
          datasets: [
            {
              data: this.langValue,
              borderColor: '#3e95cd',
              label: 'Nivel',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,

            },
          ],
        },
        options: { 
          scales: {
            y: {
              display:false
            }
          },
          plugins:{
            title:{
              display:true,
              text: 'Idiomas'
            }
          },
          responsive: false,
          maintainAspectRatio: false
      }
      });
    });
  }
 Editar(){
   this.router.navigate(['skills']);
 }
  
}
