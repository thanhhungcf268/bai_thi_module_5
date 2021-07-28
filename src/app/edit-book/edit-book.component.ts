import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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

  edit(bookForm) {
    this.bookService.edit(bookForm.value, this.id).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
