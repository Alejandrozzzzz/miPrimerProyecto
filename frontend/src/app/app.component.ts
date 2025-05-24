import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  mensaje = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   // this.http.get<{ message: string }>('http://localhost:3000/api/hello')
     // .subscribe(data => this.mensaje = data.message);
  }
}
