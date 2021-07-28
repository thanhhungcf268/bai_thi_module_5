import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  book: Book = {};
  id = 0;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const a = paramMap.get('id');
      // tslint:disable-next-line:radix
      this.id = parseInt(a);
      this.bookService.getBook(this.id).subscribe(book => {
        this.book = book;
      });
    });
  }

  ngOnInit() {
  }

  view() {
    this.router.navigateByUrl('/');
  }
}
