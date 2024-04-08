// book.service.ts in admin panel
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getbooks() {
    console.log('Sending request to fetch book events...');
    return this.http.get<any[]>("http://localhost:5000/events/book-event")  // assuming your API endpoint is '/api/books'
      .pipe(
        tap(data => console.log('Received data from the API:', data)),
        catchError(error => {
          console.error('Error fetching book events:', error);
          return throwError(error); // Re-throw the error to propagate it further
        })
      );
  }
}
