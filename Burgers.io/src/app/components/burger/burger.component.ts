import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Burger } from 'src/app/models/burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class BurgerComponent implements OnInit {
  public burger: Burger = { id: '1', name: 'Burger 1' };

  public hasCustomClass: boolean = true;

  constructor() {
    this.updateBurger();
  }

  ngOnInit(): void {}

  public updateBurger(): void {
    this.burger.name = 'Burger 2';
  }

  public burgerClick(event: Event): void {
    console.log(event);
    console.log(this.burger.name);
  }
}
