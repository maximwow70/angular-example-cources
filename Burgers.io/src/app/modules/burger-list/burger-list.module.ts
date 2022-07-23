import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerComponent } from './burger/burger.component';
import { BurgerListComponent } from './burger-list.component';
import { FormsModule } from '@angular/forms';
import { BurgerListDataService } from './services/burger-list-data.service';

@NgModule({
  declarations: [BurgerComponent, BurgerListComponent],
  imports: [CommonModule, FormsModule],
  exports: [BurgerListComponent],
  providers: [BurgerListDataService],
})
export class BurgerListModule {}
