import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SignupComponent } from './signup/signup.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { UpdateExpComponent } from './updateExp/updateExp.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { UpdatetecComponent } from './updatetec/updatetec.component';
import { UpdatesoftComponent } from './updatesoft/updatesoft.component';
import { AddTecComponent } from './add-tec/add-tec.component';
import { UpdatelangComponent } from './updatelang/updatelang.component';
import { AddlangComponent } from './addlang/addlang.component';
import { AddsoftComponent } from './addsoft/addsoft.component';
import { UpdatepersonaComponent } from './updatepersona/updatepersona.component';
import { AddexperienciaComponent } from './addexperiencia/addexperiencia.component';
import { UpdateeducComponent } from './updateeduc/updateeduc.component';
import { AddeducacionComponent } from './addeducacion/addeducacion.component';
import { UpdateprojComponent } from './updateproj/updateproj.component';
import { AddprojComponent } from './addproj/addproj.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    SignupComponent,
    ChartsComponent,
    UpdateExpComponent,
    EditskillsComponent,
    UpdatetecComponent,
    UpdatesoftComponent,
    AddTecComponent,
    UpdatelangComponent,
    AddlangComponent,
    AddsoftComponent,
    UpdatepersonaComponent,
    AddexperienciaComponent,
    UpdateeducComponent,
    AddeducacionComponent,
    UpdateprojComponent,
    AddprojComponent,
  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,NgChartsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
