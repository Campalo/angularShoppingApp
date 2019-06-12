import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //define LOCAL itemList property
  itemList;
  // define the checkoutForm property to store the form model
  checkoutForm;

  constructor(
    // use the service to be able to display the items inside the cart
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
  ) {}

  ngOnInit() {
    // assign a new value to itemList by returning a copy if the Items array
    this.itemList = this.cartService.getItems();
    // set the checkoutForm property with a form model
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  onSubmit(customerData) {
    // process checkout data from the form
    console.warn('Your order has been submitted', customerData);
    // add name and adress from the customer to customerData db on firebase
    this.db.collection('customerData').add(customerData);
    //clear the cart
    this.itemList = this.cartService.clearCart();
    //reset the form
    this.checkoutForm.reset();
  }
}
