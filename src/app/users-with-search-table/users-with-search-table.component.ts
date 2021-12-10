import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/users/user.intarface';

@Component({
  selector: 'app-users-with-search-table',
  templateUrl: './users-with-search-table.component.html',
  styleUrls: ['./users-with-search-table.component.scss']
})
export class UsersWithSearchTableComponent implements OnInit {

  searchText = '';
  filteredUserList: User[] = [];
  userList: User[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSearch() {
    this.searchInName();
  }

  onCancel() {
    this.cancel();
  }

  private cancel() {
    this.filteredUserList = [...this.userList];
    this.searchText = '';
  }

  private searchInName() {
    this.filteredUserList = this.userList.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  private getUsers(): void {
    this.http.get('http://localhost:3000/users')
      .subscribe(res => {
        this.userList = res as User[];
        this.filteredUserList = [...this.userList];
      });
  }

}
