import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/model/store';
import { StoreMock } from '../shared/store-mock';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  storeArr: Array<Store>;
  selectProduct: Store;

  constructor() { }

  ngOnInit() {
    this.storeArr  = StoreMock;
  }

  onSelect(stores: Store):void{
    this.selectProduct = stores;

  }
  downQuantity():void{
    if(this.selectProduct.quantityOfProductsAvailable = this.selectProduct.quantityOfProductsAvailable - 1 ){

    }else if (this.selectProduct.quantityOfProductsAvailable === 0) {
      alert("No hay mas productos disponibles");
    }
    }
  backToMenu():void{
    this.selectProduct = null;
  }
  
}
