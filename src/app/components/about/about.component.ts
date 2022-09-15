import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title = '>_CHODILEF';
  subtitle = 'Developer FullStack Junior';
  acercaDe: any;
  constructor(private about: PortfolioService) {}

  ngOnInit(): void {
    this.about.ObtenerDatos().subscribe((data) => {
      this.acercaDe = data.about;
    });
  }
}
