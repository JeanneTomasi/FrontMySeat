import { UserService } from './../../../../services/user.service';
import { User } from './../../../../models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  user: User;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((value: User[]) => this.users = value);
  }

  add() {
    this.router.navigate(['/user/form']);
  }

  delete(id) {
    this.service.delete(id)
      .subscribe(res => {
        this.findAll();
      }, (err) => {
        console.log(err);
      }
      );
  }

  edit(id) {
    this.router.navigate(['/user/edit', id]);
    // this.service.editMode = true;
  }


}


