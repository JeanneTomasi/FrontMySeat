import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { User } from './../../../models/user';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  user = new User();
  // form: FormGroup;
  @Input() userData = {
    id_user: 0, name: '', firstName: '', dateDeNaissance: null, num: 0, street: '',
    city: '', postalCode: 0, country: '', email: '', username: ''
  };

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {

    // this.form = new FormGroup({

    //   name: new FormControl(null, Validators.required),
    //   firstName: new FormControl(null, Validators.required),
    //   dateDeNaissance: new FormControl(null, Validators.required),
    //   email: new FormControl(null, Validators.required),
    //   username: new FormControl(null, Validators.required),
    //   num_street: new FormControl(null),
    //   street: new FormControl(null),
    //   city: new FormControl(null),
    //   postalCode: new FormControl(null),
    //   country: new FormControl(null),


    // });

  }

  redirect() {
    this.user = this.userData;
    this.service.add(this.user).subscribe((result) => this.router.navigate(['/mes-lignes']));


  }

}
