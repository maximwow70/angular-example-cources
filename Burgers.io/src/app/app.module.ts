import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BurgerListModule } from './modules/burger-list/burger-list.module';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DetailsComponent } from './component/details/details.component';
import { TeamComponent } from './component/team/team.component';
import { PipesPresentationComponent } from './components/pipes-presentation/pipes-presentation.component';

import ru from '@angular/common/locales/ru';
import ar from '@angular/common/locales/ar';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    NavigationComponent,
    DetailsComponent,
    TeamComponent,
    PipesPresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BurgerListModule,
  ],
  providers: [
    // BurgerListDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    [ru, ar].forEach(registerLocaleData);
  }
}
