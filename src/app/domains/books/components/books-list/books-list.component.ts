import { Component } from '@angular/core';
import { Book } from '../../models/books.model';
import { Observable } from 'rxjs';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  public bookList$: Observable<Book[]>;
  public searchText = '';

  constructor(private booksService: BooksService) {
    this.bookList$ = booksService.booksList$;
  }
}
