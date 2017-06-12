import { Injectable } from '@angular/core';

import { Book } from './book';
//import { BOOKS } from './mock-library';

import { Http,RequestOptions }  from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LibraryService {

   private url = 'http://localhost:8000/library'; 

   constructor(private http: Http) {}

    getBooks(): Promise<Book[]> {
        return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().data as Book[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}