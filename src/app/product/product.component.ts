import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:any[] = []
  constructor(private productService: ProductService , private router : Router) { }
  ngOnInit(): void {
    this.loadProducts();
  
      console.log("Product page loaded"); 

  }
  navigateDetailPage(id: number): void {
    console.log("Navigating to detail page with ID:", id);
    this.router.navigate(['/detail', id]);


  }
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('API response:', data);
        this.products = data;
      },
      error: (err) => console.error('Error loading products:', err)
    });
  }
}
