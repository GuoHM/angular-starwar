import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  static readonly URL = 'https://swapi.co/api/';
  constructor(private router: Router) { }

  categories: string[] = ['planets', 'starships', 'vehicles', 'people', 'films', 'species'];

  ngOnInit() {
  }

  OnMatCardClickEvent(category: string) {
    var url = CategoryComponent.URL + category + '/?page=1';
    this.router.navigate(['list', category, url]);
  }

}
