import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth.service';
import { SignupComponent } from '../signup/signup.component';
import { AuthGuard } from '../auth.guard';
import { UpdateExpComponent } from '../updateExp/updateExp.component';
import { EditskillsComponent } from '../editskills/editskills.component';
import { UpdatetecComponent } from '../updatetec/updatetec.component';
import { UpdatesoftComponent } from '../updatesoft/updatesoft.component';
import { AddTecComponent } from '../add-tec/add-tec.component';
import { UpdatelangComponent } from '../updatelang/updatelang.component';
import { AddlangComponent } from '../addlang/addlang.component';
import { AddsoftComponent } from '../addsoft/addsoft.component';
import { UpdatepersonaComponent } from '../updatepersona/updatepersona.component';
import { AddexperienciaComponent } from '../addexperiencia/addexperiencia.component';
import { UpdateeducComponent } from '../updateeduc/updateeduc.component';
import { AddeducacionComponent } from '../addeducacion/addeducacion.component';
import { UpdateprojComponent } from '../updateproj/updateproj.component';
import { AddprojComponent } from '../addproj/addproj.component';


const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'signup',component:SignupComponent},
  {path:'edit',component:UpdateExpComponent,canActivate:[AuthGuard]},
  {path:'educacion',component:UpdateeducComponent,canActivate:[AuthGuard]},
  {path:'skills',component:EditskillsComponent,canActivate:[AuthGuard]},
  {path:'tecnologia',component:UpdatetecComponent,canActivate:[AuthGuard]},
  {path:'soft',component:UpdatesoftComponent,canActivate:[AuthGuard]},
  {path:'idiomas',component:UpdatelangComponent,canActivate:[AuthGuard]},
  {path:'personas',component:UpdatepersonaComponent,canActivate:[AuthGuard]},
  {path:'proyectos',component:UpdateprojComponent,canActivate:[AuthGuard]},
  {path:'addtec',component:AddTecComponent,canActivate:[AuthGuard]},
  {path:'addlang',component:AddlangComponent,canActivate:[AuthGuard]},
  {path:'addsoft',component:AddsoftComponent,canActivate:[AuthGuard]},
  {path:'addexp',component:AddexperienciaComponent,canActivate:[AuthGuard]},
  {path:'addedu',component:AddeducacionComponent,canActivate:[AuthGuard]},
  {path:'addproj',component:AddprojComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }
