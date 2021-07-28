import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }
  create(bookForm) {
    this.bookService.create(bookForm.value).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
