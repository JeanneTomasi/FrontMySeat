import { ActivatedRoute, Router } from '@angular/router';
import { CollectivityService } from './../../../../services/collectivity.service';
import { Component, OnInit, Input } from '@angular/core';
import { Collectivity } from 'src/models/collectivity';

@Component({
  selector: 'app-collectivity-edit',
  templateUrl: './collectivity-edit.component.html',
  styleUrls: ['./collectivity-edit.component.css']
})

export class CollectivityEditComponent implements OnInit {

  @Input() collectivityData = { id_collectivity: 0, name: '', operation_area: '' };

  collectivity: Collectivity;

  constructor(private service: CollectivityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.service.getById(this.route.snapshot.params['id']).subscribe((data: Collectivity) => {
      console.log(data);
      this.collectivityData = data;
    });
  }


  update() {
    this.collectivity = this.collectivityData;
    this.service.update(this.collectivity).subscribe((result) => {
      this.router.navigate(['/collectivity/list']);
    });
  }

}


