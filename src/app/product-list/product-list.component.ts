import { Component } from '@angular/core';

import { products } from '../products';

/* Define by:
 - selector to identify the component and render it as an HTML element on the page
 - html template to present ui to user
 - component-specific styles to define look and feel
 - component class to handle data and functionalities
*/
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will been notified when the product goes on sale')
  }
}

