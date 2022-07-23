import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Burger } from 'src/app/models/burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public burger: Burger;

  @Output()
  public remove: EventEmitter<Burger> = new EventEmitter<Burger>();

  @Output()
  public nameChange: EventEmitter<Burger> = new EventEmitter<Burger>();

  public hasCustomClass: boolean = true;

  @ViewChild('burgerHTMLElement', { static: false })
  public burgerHTMLElement: ElementRef;

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(`onChanges: ${this.burger.name}`);
  }

  public ngOnInit(): void {
    console.log(`onInit: ${this.burger.name}`);
  }

  public ngOnDestroy(): void {
    console.log(`onDestroy: ${this.burger.name}`);
  }

  public onRemove(): void {
    this.remove.emit(this.burger);
  }

  public onNameChange(): void {
    this.nameChange.emit(this.burger);
  }
}
