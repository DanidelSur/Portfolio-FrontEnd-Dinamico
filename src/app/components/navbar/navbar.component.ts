import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  entrar(): void {
    document.addEventListener('submit', (e) => {
      alert('Diste Click');
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
