import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category-inteface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() category: Category;
  constructor() {}

  ngOnInit(): void {}
}
