import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user = {  id_user: 0, name: '', firstName: '', dateDeNaissance: null, num: 0, street: '',
  city: '', postalCode: 0, country: '', email: '', handicap: '', username: '' };

  constructor() { }

  ngOnInit() {
  }

}
