import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('PB & J Sandwich',['Sliced Bread','Peanut Butter', 'Jelly'],['Spread peanut butter over one slice of bread.', 'Spread jelly over other slice of bread.', 'Combine slices of bread; peanut butter side to jelly side.']),
    new Recipe('PB & Banana Sandwich',[' Sliced Bread','Peanut Butter', 'Banana'],['Peel and slice banana into 1cm slices.', 'Spread peanut butter over both slices of bread.', 'Place one layer of banana slices over one of the slices of bread.', 'Place other slice of bread on top (peanut butter side down).'])
  ]
}
