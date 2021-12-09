import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './shared/interfaces/users/user.intarface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[];
  title = 'angular-crud-mock-api';

  constructor(private http: HttpClient) {
    this.users = [];
    this.getUsers();
  }

  getUsers() {
    console.log('calling')
    this.http.get('http://localhost:3000/users')
      .subscribe(res => {
        this.users = res as User[]
        console.log(this.users);
      });
  }
}
