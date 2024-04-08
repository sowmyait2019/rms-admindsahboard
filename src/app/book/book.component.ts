// book.component.ts in admin panel
import { Component, OnInit } from '@angular/core';
import { BookService } from "../bservice/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // books!: any[];
  //
  // constructor(private bookService: BookService) {}
  //
  // // ngOnInit() {
  // //   this.bookService.getBookEvents().subscribe(books => {
  // //     this.books = books;
  // //   });
  // // }
  // ngOnInit() {
  //   this.bookService.getbooks().subscribe(
  //     books => {
  //       console.log('Received books:', books); // Log the received data
  //       this.books = books;
  //     },
  //     error => {
  //       console.error('Error fetching book events:', error);
  //     }
  //   );
  // }
  string = '';
  book:any;
  constructor(private  bookservice: BookService) { }
  ngOnInit() {
    this.bookservice.getbooks().subscribe(books =>{
      this.book = books;
    })


  }
}
