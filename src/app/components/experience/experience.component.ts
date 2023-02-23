import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
//import { ExpEdu } from 'src/app/Interfaces/Exp.Edu.interface';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  Experiencias: any;

  constructor(private svcExp: PortfolioService) {}

  ngOnInit(): void {
    this.svcExp
      .datosExps()
      .pipe(tap((res) => (this.Experiencias = res)))
      .subscribe();
  }
}
