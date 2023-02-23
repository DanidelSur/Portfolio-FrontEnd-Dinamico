import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-sociales',
  templateUrl: './sociales.component.html',
  styleUrls: ['./sociales.component.css'],
})
export class SocialesComponent implements OnInit {
  sociales: any;
  constructor(private svcSocial: PortfolioService) {}

  ngOnInit(): void {
    this.svcSocial
      .datosSocial()
      .pipe(tap((res) => (this.sociales = res)))
      .subscribe();
  }
}
