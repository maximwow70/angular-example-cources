import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BurgerListModule } from './modules/burger-list/burger-list.module';
import { BurgerListDataService } from './modules/burger-list/services/burger-list-data.service';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, ContactsComponent, HomeComponent, NavigationComponent],
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
export class AppModule {}
