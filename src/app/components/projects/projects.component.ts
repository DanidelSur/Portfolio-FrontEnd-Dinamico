import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  proyectos: any;

  constructor(private svcPro: PortfolioService) {}

  ngOnInit(): void {
    this.svcPro
      .datosPro()
      .pipe(tap((res) => (this.proyectos = res)))
      .subscribe();
  }
}
