import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, delay, map, Observable, of, switchMap } from 'rxjs';
import { Burger } from 'src/app/models/burger';

@Injectable()
export class BurgerListDataService {
  public defaultBurgers: Burger[] = [
    { id: 1, name: 'Burger 1', editable: true },
    { id: 2, name: 'Burger 2', editable: false },
    { id: 3, name: 'Burger 3', editable: true },
    { id: 4, name: 'Burger 4', editable: false },
  ] as Burger[];

  constructor(private _httpClient: HttpClient) {}

  public getDefaultBurgers(): Observable<Burger[]> {
    return of(this.defaultBurgers);
  }

  public getBurgers(): Observable<Burger[]> {
    // const options: { headers: HttpHeaders } = {
    //   headers: new HttpHeaders({
    //     'X-RapidAPI-Key': '45cdbb94c0mshcb7a755e815b533p1e674ejsn7b059bfb7178',
    //     'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
    //   }),
    // };
    return combineLatest([
      // this._httpClient.get<Burger[]>(
      //   'https://burgers1.p.rapidapi.com/burgers',
      //   options
      // ),
      this._httpClient.get<Burger[]>('./assets/burgers.json'),
      this.getDefaultBurgers(),
    ]).pipe(
      delay(3000),
      map(([burgers, defaultBurgers]) => [...defaultBurgers, ...burgers])
    );
  }
}
