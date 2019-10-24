import { Collectivity } from './../../../models/collectivity';
import { CollectivityService } from './../../../services/collectivity.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-collectivity-form',
  templateUrl: './collectivity-form.component.html',
  styleUrls: ['./collectivity-form.component.css']
})

export class CollectivityFormComponent implements OnInit {

  @Input() collectivityData = { nom: '', pattes: 0, coolitudeSurVingt: 0 };

  form: FormGroup;
  collectivity: Collectivity;
  id: number;
  editMode: false;

  constructor(private service: CollectivityService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      id_collectivity: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      operation_area: new FormControl(null, Validators.required),
    });
    this.collectivity = this.form;
  }


  add() {
    this.service.add(this.form).subscribe((result) => {
      this.router.navigate(['/collectivity/list']);
    }, (err) => {
      console.log(err);
    });
  }
}
