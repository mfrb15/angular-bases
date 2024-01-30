import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {
public name: string = 'ironman';
public age: number = 45;

get capitalizadName():string {
  return this.name.toLocaleUpperCase();
}

getHeroDescription():string {
  return `${ this.name } - ${ this.age } `;
}

changeHero(): void{
this.name = 'Spiderman';
}

changeAge(): void{
this.age = 30;
}

resetForm(): void{
  this.name = 'ironman';
  this.age= 45;
}

}
