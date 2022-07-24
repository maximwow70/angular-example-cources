import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAccessService {
  public contactsAccess$: Observable<boolean> = of(
    Boolean(parseInt(<string>localStorage.getItem('user-contacts-access')))
  );

  constructor() {}
}
