import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({

      name: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      dateDeNaissance: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      num_street: new FormControl(null),
      street: new FormControl(null),
      city: new FormControl(null),
      postalCode: new FormControl(null),
      country: new FormControl(null),


    });

  }

}
