import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  descripcion = 'Base de datos';
  Fchainicio = 'Base de datos';
  FchaSalida = 'Base de Datos';

  Experiencias: any;

  constructor(private servPort: PortfolioService) {}

  ngOnInit(): void {
    this.servPort.ObtenerDatos().subscribe((data) => {
      this.Experiencias = data.exp;
    });
  }
}
