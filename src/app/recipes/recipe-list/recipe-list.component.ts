import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a recipe',
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
    new Recipe(
      'A Test Recipe 22',
      'This is simply a recipe 22',
      'https://images.pexels.com/photos/6287423/pexels-photo-6287423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
