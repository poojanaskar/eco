import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
              { path: '', component: HomeComponent },
              {
                            component:ContactComponent,
                            path:'contact'
              },
              {
                            component:ProductComponent,
                            path:'product'
              },
              {
                            component: DetailComponent ,
                            path: 'detail/:id'
              }
              ,
              {
                            component: CartComponent ,
                            path: 'cart'
              }
];
