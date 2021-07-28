import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {CreatebookComponent} from './createbook/createbook.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {ViewBookComponent} from './view-book/view-book.component';


const routes: Routes = [
  {
    path: ``,
    component: BookComponent
  },
  {
    path: `create`,
    component: CreatebookComponent
  },
  {
    path: `edit/:id`,
    component: EditBookComponent
  },
  {
    path: `delete/:id`,
    component: DeleteBookComponent
  },
  {
    path: `view/:id`,
    component: ViewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
