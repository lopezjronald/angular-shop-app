import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static7.depositphotos.com/1007989/759/i/950/depositphotos_7599564-stock-photo-recipe-icon.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static7.depositphotos.com/1007989/759/i/950/depositphotos_7599564-stock-photo-recipe-icon.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static7.depositphotos.com/1007989/759/i/950/depositphotos_7599564-stock-photo-recipe-icon.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
