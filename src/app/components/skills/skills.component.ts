import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  progreso = '60';
  habilidades: any;
  constructor(private skil: PortfolioService) {}

  ngOnInit(): void {
    this.skil.ObtenerDatos().subscribe((data) => {
      this.habilidades = data.habilidad;
    });
  }
}
