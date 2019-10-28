import { UserService } from './../../../../services/user.service';
import { Router } from '@angular/router';
import { User } from './../../../../models/user';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = new User();
  // form: FormGroup;
  @Input() userData = {
    id_user: 0, name: '', firstName: '', dateDeNaissance: null, num: 0, street: '',
    city: '', postalCode: 0, country: '', email: '', username: ''
  };

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
  }

  update() {
    this.user = this.userData;
    this.service.update(this.user).subscribe((result) => this.router.navigate(['/user/list']));


  }

}
