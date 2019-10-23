import { CollectivityService } from './../../../services/collectivity.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-collectivity-form',
  templateUrl: './collectivity-form.component.html',
  styleUrls: ['./collectivity-form.component.css']
})

export class CollectivityFormComponent implements OnInit {

  form: FormGroup;
  collectivity: any;
  id: any;
  editMode: any;
  constructor(private service: CollectivityService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      idUtilisateur: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required),
      prenom: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    });

    this.activatedRoute.params.subscribe((param: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.id = param['id'];
      if (this.id) {
        this.userService.getOne(this.id).subscribe((response: any) => {
          this.form.setValue(response);
        });
      }
    });

    this.editMode = this.userService.editMode;
  }

  add() {
    this.userService.add(this.form.value).subscribe(response => {
      this.userService.utilisateurs.push(response.body);
      this.form.reset();
    });
  }


  findIndexToUpdate(item) {
    return item.id === this;
  }

  update(id) {
    this.userService.update(this.form.value).subscribe((response: any) => {
      this.user = this.userService.utilisateurs.find(this.findIndexToUpdate, response.body.id);
      const index = this.userService.utilisateurs.indexOf(this.user);
      this.userService.utilisateurs.splice(index, 1, response.body);
      this.editMode = false;
      this.userService.editMode = false;
      this.router.navigate(['/user/form']);
      this.form.reset();
    });
  }

}
