import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];
  constructor(private cartService: CartService) {}
ngOnInit(){
this.cartService.getCartItems().subscribe((cart)=>{
  this.cartItems = cart;
  console.log('Cart Items:', this.cartItems);
})
}
removeFromCart(productId: number) {
  this.cartService.removeFromCart(productId);
}
}
