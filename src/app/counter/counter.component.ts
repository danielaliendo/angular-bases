import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  public init: number = 10;
  public counter: number = this.init

  increaseBy(value: number): void {
    this.counter += value
  }
  reset(): void {
    this.counter = this.init
  }
}
