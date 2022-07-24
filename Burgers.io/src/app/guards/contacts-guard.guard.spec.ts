import { TestBed } from '@angular/core/testing';

import { ContactsGuardGuard } from './contacts-guard.guard';

describe('ContactsGuardGuard', () => {
  let guard: ContactsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContactsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
