import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private svcDB: PortfolioService) {}

  ngOnInit(): void {
    // this.svcDB.ObtenerDatos().subscribe((data) => console.log(data));
  }

  iniciarSesion() {}
}
