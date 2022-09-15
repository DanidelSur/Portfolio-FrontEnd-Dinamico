import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  FchaInicio = 'Base de Datos';
  Finalizacion = 'Base de datos';
  education: any;
  constructor(private educ: PortfolioService) {}

  ngOnInit(): void {
    this.educ.ObtenerDatos().subscribe((data) => {
      this.education = data.edu;
    });
  }
}
