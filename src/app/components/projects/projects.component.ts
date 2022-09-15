import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  proyectos: any;

  constructor(private pytos: PortfolioService) {}

  ngOnInit(): void {
    this.pytos.ObtenerDatos().subscribe((data) => {
      this.proyectos = data.projects;
    });
  }
}
