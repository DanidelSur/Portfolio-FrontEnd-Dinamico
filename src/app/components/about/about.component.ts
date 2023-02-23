import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IAbout } from 'src/app/Interfaces/About.interface';
import { IPersona } from 'src/app/Interfaces/Admin.interface';
//import { IImagen } from 'src/app/Interfaces/Imagen.interface';
import { PortfolioService } from 'src/app/Service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title = '>_CHODILEF';
  subtitle = 'Developer FullStack Junior';

  imgf: any;
  ab: IAbout[] = [];
  admin!: IPersona;

  persona: any;

  constructor(private about: PortfolioService) {}

  ngOnInit(): void {
    // this.about.imgAbout().subscribe((data) => (this.imgf = data));

    this.about.datosAb().subscribe((data: IAbout[]) => (this.ab = data));

    /*this.about
      .admin()
      .pipe(tap((res) => (this.admin = res)))
      .subscribe();
*/
    this.about
      .ObtenerDatosPersona()
      .subscribe((data: IPersona) => (this.persona = data));
  }
}
