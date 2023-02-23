import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExpEdu } from '../Interfaces/Exp.Edu.interface';
import { ISkills } from '../Interfaces/Skills.interface';
import { IProjects } from '../Interfaces/Projects.interface';
import { ISocial } from '../Interfaces/Social.interface';
import { IAbout } from '../Interfaces/About.interface';
import { IImagen } from '../Interfaces/Imagen.interface';
import { IPersona } from '../Interfaces/Admin.interface';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  // Conectar con MySql?
  // acortar rutas
  // implementa para cada uno de las secciones sus rutas. { http:localhost:8080/datos + "/imagen" || "/about" || "/experience" || etc. }
  private apiUrl = 'http://localhost:8080/';
  public URL = 'http://localhost:3000/';
  /*  
  apimg = 'http://localhost:3000/imagen';
  apiAb = 'http://localhost:3000/about';
  apiExps = 'http://localhost:3000/experience';
  apiEduc = 'http://localhost:3000/education';
  apiSkills = 'http://localhost:3000/skills';
  apiProjects = 'http://localhost:3000/projects';
  apiSocial = 'http://localhost:3000/social'; */

  constructor(private https: HttpClient) {}

  ObtenerDatosPersona(): Observable<IPersona> {
    return this.https.get<IPersona>(this.apiUrl + 'ver');
  }

  admin(): Observable<IPersona> {
    return this.https.get<IPersona>(this.URL + 'persona');
  }
  imgAbout(): Observable<IImagen> {
    return this.https.get<IImagen>(this.URL + 'imagen');
  }

  datosAb(): Observable<IAbout[]> {
    // return this.https.get<IAbout[]>(this.URL + 'about');
    return this.https.get<IAbout[]>(this.apiUrl + 'ver/about');
  }
  datosExps(): Observable<IExpEdu[]> {
    // return this.https.get<IExpEdu[]>(this.URL + 'experience');
    return this.https.get<IExpEdu[]>(this.apiUrl + 'ver/exps');
  }
  datosEduc(): Observable<IExpEdu[]> {
    // return this.https.get<IExpEdu[]>(this.URL + 'education');
    return this.https.get<IExpEdu[]>(this.apiUrl + 'ver/edus');
  }
  datosSkills(): Observable<ISkills[]> {
    // return this.https.get<ISkills[]>(this.URL + 'skills');
    return this.https.get<ISkills[]>(this.apiUrl + 'ver/skills');
  }
  datosPro(): Observable<IProjects[]> {
    // return this.https.get<IProjects[]>(this.URL + 'projects');
    return this.https.get<IProjects[]>(this.apiUrl + 'ver/projects');
  }
  datosSocial(): Observable<ISocial[]> {
    // return this.https.get<ISocial[]>(this.URL + 'social');
    return this.https.get<ISocial[]>(this.apiUrl + 'ver/social');
  }
}
