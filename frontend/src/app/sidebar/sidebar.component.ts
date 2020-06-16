import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  public menu: any[] = [
    {
      id: 1,
      text: 'Home',
      icon: 'home',
      link: '/home'
    },
    {
      id: 2,
      text: 'Estante',
      icon: 'menu_book',
      link: '/estante'
    },
    {
      id: 3,
      text: 'Empréstimo',
      icon: 'list_alt',
      link: '/emprestimo'
    },
    {
      id: 4,
      text: 'Metas',
      icon: 'check_circle',
      link: '/metas'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
