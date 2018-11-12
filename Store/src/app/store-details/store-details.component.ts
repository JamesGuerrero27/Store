import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/model/store';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  constructor() { }
  productsdetails: Store;
  ngOnInit() {
  }

}
