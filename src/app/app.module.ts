import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import {FormsModule} from '@angular/forms';
import { ViewBookComponent } from './view-book/view-book.component';
import {CreateBookComponent} from './createbook/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    EditBookComponent,
    DeleteBookComponent,
    ViewBookComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
