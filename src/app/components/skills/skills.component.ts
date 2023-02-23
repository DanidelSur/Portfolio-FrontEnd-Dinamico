import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  habilidades: any;

  constructor(private svcSkills: PortfolioService) {}

  ngOnInit(): void {
    this.svcSkills
      .datosSkills()
      .pipe(tap((res) => (this.habilidades = res)))
      .subscribe();
  }
}
