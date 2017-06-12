import { Component,OnInit  } from '@angular/core';
import { LibraryService} from './library.service';
import { Book } from './book';

@Component({
    selector: 'latestbooks',
    templateUrl: './../html/latest-books.component.html',
    providers: [LibraryService]
})

export class LatestBooksComponent implements OnInit {
    constructor(private libService: LibraryService) { }
    books: Book[];
    getBooks(): void {
        this.libService.getBooks().then(books => this.books = books);
    }

    ngOnInit(): void {
        this.getBooks();
    }
}