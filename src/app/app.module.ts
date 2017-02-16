import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Importer le module des routes
import { Routing } from './routing';

import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //Ajouter la class des routes
   Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
