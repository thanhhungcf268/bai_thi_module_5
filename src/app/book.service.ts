import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/books');
  }

  create(book): Observable<Book> {
    return this.http.post<Book>(API_URL + '/books', book);
  }

  edit(book, id): Observable<Book> {
    return this.http.put(API_URL + '/books/' + id, book);
  }

  getBook(id): Observable<Book> {
    return this.http.get<Book>(API_URL + '/books/' + id);
  }

  delete(id): Observable<Book> {
    return this.http.delete(API_URL + '/books/' + id);
  }
}
