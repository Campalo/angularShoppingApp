import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

//firebase
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartService} from './cart.service';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, //enable HttpClient for app
    AngularFireModule.initializeApp(environment.firebase, 'ng-shopping-app'), //imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CartService],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
