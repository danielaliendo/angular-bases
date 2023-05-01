import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Wonderwoman',
    'Hulk',
  ]

  public deletedHero: undefined | string

  public disableDeleteButton: Boolean = false

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop()
    this.disableDeleteButton = this.heroNames.length === 0
  }

}
