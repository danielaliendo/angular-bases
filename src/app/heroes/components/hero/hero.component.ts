import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  private initialName: string = 'Ironman';
  private initialAge: number = 45;

  public name: string = this.initialName;
  public age: number = this.initialAge;

  public showNameButton: Boolean = true
  public showAgeButton: Boolean = true

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.showNameButton = false;
    this.name = 'Superman';
  }

  changeHeroAge(): void {
    this.showAgeButton = false;
    this.age = 25;
  }

  resetHero(): void {
    this.name = this.initialName;
    this.age = this.initialAge;
    this.showNameButton = true;
    this.showAgeButton = true;
  }

}
