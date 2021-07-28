import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: Book = {};
  id = 0;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) {
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

  delete() {
    this.bookService.delete(this.id).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
