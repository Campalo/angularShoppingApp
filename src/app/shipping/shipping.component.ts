import {Component, OnInit} from '@angular/core';
//firebase
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<any[]>;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    //go into the db in firebase,then into the 'shippingCosts' collection, and update the value if there is a change
    this.shippingCosts = this.db.collection('shippingCosts').valueChanges();
  }
}
