import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonHeaderComponentComponent } from './button-header-component/button-header-component.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonHeaderComponentComponent,
    NavMenuComponent,
    NavMenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
