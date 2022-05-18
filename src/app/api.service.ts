import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from './modelo/experiencia';
import { Educacion } from './modelo/educacion';
import { Tecnologias } from './modelo/tecnologias';
import { Soft } from './modelo/soft';
import { Idiomas } from './modelo/idiomas';
import { Persona } from './modelo/persona';
import { Proyectos } from './modelo/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
 
  url='https://spring-gcastellini.herokuapp.com/login';
  url2='https://spring-gcastellini.herokuapp.com/experiencias'
  url3='https://spring-gcastellini.herokuapp.com/educacion'
  url4='https://spring-gcastellini.herokuapp.com/tecnologias'
  url5='https://spring-gcastellini.herokuapp.com/skills'
  url6='https://spring-gcastellini.herokuapp.com/idiomas'
  url7='https://spring-gcastellini.herokuapp.com/personas'
  url8='https://spring-gcastellini.herokuapp.com/proyectos'



  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.url,{username, password});
  }
getExperiencia(){
  return this.http.get<Experiencia[]>(this.url2);
}
getEducacion(){
  return this.http.get<Educacion[]>(this.url3);
}

getTecnologias(){
 return this.http.get<Tecnologias[]>(this.url4);
}
getSoft(){
  return this.http.get<Soft[]>(this.url5);
}
getLang(){
  return this.http.get<Idiomas[]>(this.url6);
}
getPersona(){
  return this.http.get<Persona[]>(this.url7);
}
getProyectos(){
  return this.http.get<Proyectos[]>(this.url8);
}
//CREATE

createExperiencia(experiencia:Experiencia){
  return this.http.post<Experiencia>(this.url2,experiencia);
}
createEducacion(educacion:Educacion){
  return this.http.post<Educacion>(this.url3,educacion);
}
createTecnologias(tecnologia:Tecnologias){
  return this.http.post<Tecnologias>(this.url4,tecnologia);
 }
 createIdiomas(idioma:Idiomas){
  return this.http.post<Idiomas>(this.url6,idioma);
 }
 createSoft(soft:Soft){
  return this.http.post<Soft>(this.url5,soft);
 }
 createProj(proyecto:Proyectos){
  return this.http.post<Proyectos>(this.url8,proyecto);
 }
//EDIT
getPersonaId(id:any){
  return this.http.get<Persona>(this.url7+"/"+id);
}
updatePersona(persona:Persona){
  return this.http.put<Persona>(this.url7+"/"+persona.id,persona);
}
getExperienciaId(id:any){
  return this.http.get<Experiencia>(this.url2+"/"+id);
}
updateExperiencia(experiencia:Experiencia){
  return this.http.put<Experiencia>(this.url2+"/"+experiencia.id,experiencia);
}
getEducacionId(id:any){
  return this.http.get<Educacion>(this.url3+"/"+id);
}
updateEducacion(educacion:Educacion){
  return this.http.put<Educacion>(this.url3+"/"+educacion.id,educacion);
}
getTecnologiaId(id:any){
  return this.http.get<Tecnologias>(this.url4+"/"+id);
}
updateTecnologia(tecnologia:Tecnologias){
  return this.http.put<Tecnologias>(this.url4+"/"+tecnologia.id,tecnologia);
}
getSoftId(id:any){
  return this.http.get<Soft>(this.url5+"/"+id);
}
updateSoft(soft:Soft){
  return this.http.put<Soft>(this.url5+"/"+soft.id,soft);
}

getLangId(id:any){
  return this.http.get<Idiomas>(this.url6+"/"+id);
}
updateLang(lang:Idiomas){
  return this.http.put<Idiomas>(this.url6+"/"+lang.id,lang);
}
getProyectoId(id:any){
  return this.http.get<Proyectos>(this.url8+"/"+id);
}
updateProyecto(proyecto:Proyectos){
  return this.http.put<Proyectos>(this.url8+"/"+proyecto.id,proyecto);
}
//DELETE
deleteExperiencia(experiencia:Experiencia){
  return this.http.delete<Experiencia>(this.url2+"/"+experiencia.id);
}
deleteEducacion(educacion:Educacion){
  return this.http.delete<Educacion>(this.url3+"/"+educacion.id);
}
deleteTecnologias(tecnologia:Tecnologias){
  return this.http.delete<Tecnologias>(this.url4+"/"+tecnologia.id);
}
deleteSoft(soft:Soft){
  return this.http.delete<Soft>(this.url5+"/"+soft.id);
}
deleteLang(lang:Idiomas){
  return this.http.delete<Idiomas>(this.url6+"/"+lang.id);
}
deleteProj(proj:Proyectos){
  return this.http.delete<Proyectos>(this.url8+"/"+proj.id);
}
}

