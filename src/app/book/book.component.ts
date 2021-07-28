import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }

}
