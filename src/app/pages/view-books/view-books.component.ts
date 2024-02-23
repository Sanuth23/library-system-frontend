import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent implements OnInit {
  private http;
  public bookList: any;

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
        this.bookList=data;
      })
  }

}
