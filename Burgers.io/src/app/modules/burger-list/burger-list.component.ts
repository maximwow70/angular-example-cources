import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  of,
  ReplaySubject,
  Subject,
  switchMap,
  take,
  first,
  Observable,
  fromEvent,
  takeUntil,
} from 'rxjs';
import { Burger } from 'src/app/models/burger';
import { BurgerComponent } from './burger/burger.component';
import { BurgerListDataService } from './services/burger-list-data.service';

interface BurgerListParams extends Params {
  id: number;
}

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss'],
})
export class BurgerListComponent implements AfterViewInit {
  @ViewChildren(BurgerComponent)
  public burgerComponents: BurgerComponent;

  public burgerList: Array<Burger>;
  public selectedBurger: Burger | undefined;

  public burgers$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private _cdr: ChangeDetectorRef,
    private _burgerListDataService: BurgerListDataService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    // combineLatest([
    //   this.burgers$.pipe(
    //     map((a) => a * 2),
    //     filter((a) => a % 2 === 0)
    //   ),
    //   this._burgerListDataService.getBurgers(),
    // ])
    //   .pipe(take(10))
    //   .subscribe((a) => {
    //     // console.log(a);
    //   });
    // // this.burgers$.next(6);
    // // this.burgers$.next(7);
    // // this.burgers$.next(8);
    // // this.burgers$.next(9);
    // let i = 1;
    // setInterval(() => {
    //   this.burgers$.next(i++);
    // }, 1000);

    // this.burgerList = [...this._burgerListDataService.defaultBurgers];

    this._burgerListDataService
      .getBurgers()
      .pipe(
        take(1),
        filter((burgers) => Boolean(burgers))
      )
      .subscribe((burgers) => {
        this.burgerList = burgers;

        this._activatedRoute.params.subscribe((params) => {
          console.log(params);
          const selectedId: number = parseInt(params['id']);
          this.selectedBurger = this.burgerList.find(
            (burger) => burger.id === selectedId
          );
        });

        this._cdr.markForCheck();
        // console.log(this.burgerList, this.burgerList.length);
      });
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   if (this.burgerList[0]) {
    //     this.burgerList[0] = {
    //       ...this.burgerList[0],
    //       name: 'Custom name',
    //     };
    //   }
    //   this._cdr.markForCheck();
    // }, 3000);
  }

  public removeBurger(burger: Burger): void {
    this.burgerList = this.burgerList.filter((b) => b?.id !== burger.id);
  }

  public selectBurger(burger: Burger): void {
    this._router.navigate(['/', 'burgers', burger.id]);
  }

  public changeBurgerName(burger: Burger): void {}

  public trackById(index: number, burger: Burger): number {
    return burger.id;
  }

  public filterName: string = '';

  public search(): void {
    // this.burgerList = this.burgerListService.search(
    //   this.burgerList,
    //   this.filterName
    // );
  }
}
