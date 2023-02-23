import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialesComponent } from './components/sociales/sociales.component';

const routes: Routes = [
  { path: 'inicio', component: HeaderComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exp', component: ExperienceComponent },
  { path: 'edu', component: EducationComponent },
  { path: 'hab', component: SkillsComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'redes', component: SocialesComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
