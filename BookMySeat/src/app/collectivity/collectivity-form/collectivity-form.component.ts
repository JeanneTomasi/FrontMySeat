import { CollectivityService } from './../../../services/collectivity.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
      id_collectivity: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      operation_area: new FormControl(null, Validators.required),
    });

    this.activatedRoute.params.subscribe((param: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.id = param['id'];
      if (this.id) {
        this.service.getOne(this.id).subscribe((response: any) => {
          this.form.setValue(response);
        });
      }
    });

    this.editMode = this.service.editMode;
  }

  add() {
    this.service.add(this.form.value).subscribe(response => {
      this.service.collectivities.push(response.body);
      this.form.reset();
    });
  }


  findIndexToUpdate(item) {
    return item.id === this;
  }

  update(id) {
    this.service.update(this.form.value).subscribe((response: any) => {
      this.collectivity = this.service.collectivities.find(this.findIndexToUpdate, response.body.id);
      const index = this.service.collectivities.indexOf(this.collectivity);
      this.service.collectivities.splice(index, 1, response.body);
      this.editMode = false;
      this.service.editMode = false;
      this.router.navigate(['/collectivity/form']);
      this.form.reset();
    });
  }

}
