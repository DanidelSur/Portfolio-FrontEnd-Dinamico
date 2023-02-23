import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: any;
  constructor(private svcEd: PortfolioService) {}

  ngOnInit(): void {
    this.svcEd
      .datosEduc()
      .pipe(tap((res) => (this.education = res)))
      .subscribe();
  }
}
