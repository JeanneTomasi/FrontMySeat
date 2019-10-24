import { CollectivityService } from './../../../services/collectivity.service';
import { Component, OnInit } from '@angular/core';
import { Collectivity } from 'src/models/collectivity';

@Component({
  selector: 'app-collectivity',
  templateUrl: './collectivity.component.html',
  styleUrls: ['./collectivity.component.css']
})
export class CollectivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
