import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: any;
  form: FormGroup;
  admin: any;
  message: any = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

  }

  redirect() {
    this.router.navigate(['/inscription']);
  }

  login() {
    // tslint:disable-next-line:no-string-literal
    // this.user = this.userService.getLog(this.form.controls['username'].value, this.form.controls['password'].value);
    // this.userService.user = this.user;
    // if (this.user === this.admin) {
    //   this.router.navigate(['/admin']);
    // } else if (this.user != null) {
      this.router.navigate(['/mes-lignes']);

    // } else {
    //   this.message = 'Identifiants de connexion erronés';
    // }

  }
}
