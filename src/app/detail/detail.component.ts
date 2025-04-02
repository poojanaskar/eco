import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  productId!: number;
  product: any= {};
  constructor(private route: ActivatedRoute , private  service :ProductService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      
      console.log('Product ID:', this.productId);
      this.getProductDetails();
    });
  }
  getProductDetails() {
    this.service.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data[this.productId];
        console.log('Product Details:', this.product);
      },
      error: (err) => console.error('Error fetching product:', err)
    });
  }
  addToCart(product: any) {
    console.log('Added to cart:', product);
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  }
  
}
