import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-pipes-presentation',
  templateUrl: './pipes-presentation.component.html',
  styleUrls: ['./pipes-presentation.component.scss'],
})
export class PipesPresentationComponent implements OnInit {
  public user: User = { id: '1', name: 'Mike VaZovSky' };

  public revenue: number = 123400023.85;

  public percentValue: number = 0.43;

  public collection: string[] = ['a', 'b', 'c', 'd'];

  public e: number = 2.718281828459045;

  public today: Date = new Date();

  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  constructor() {}

  ngOnInit(): void {}
}
