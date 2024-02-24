import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent implements OnInit {
  private http;
  public bookList: any;
  public selectedBook: any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  public ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.http.get('http://localhost:8080/book/get')
      .subscribe((data) => {
        console.log(data);
        this.bookList = data;
      });
  }

  deleteBook() {
    this.http.delete(`http://localhost:8080/book/delete/${this.selectedBook.id}`, { responseType: 'text' })
      .subscribe((response: string) => {
        this.loadBooks();
        this.selectedBook = null;
        console.log(response);
      });
  }

  setSelectedBook(book: any) {
    this.selectedBook = book;
  }

  updateBook() {
    this.http.post('http://localhost:8080/book/add', this.selectedBook)
      .subscribe((data) => {
        console.log("Saved");
        this.loadBooks();
        this.selectedBook = null;
      });
  }

}
