import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ItemComponent} from "./item/item.component";
import {AppComponent} from "./app.component";
import {ItemService} from "./service/Item.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
