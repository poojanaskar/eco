import { Component } from '@angular/core';
// import { ContactComponent } from '../contact/contact.component';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent ,RouterLink ,ProductComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  Contact(){
    console.log(" before Contact page loaded");
    this.router.navigate(['/contact']).then(() => {
      console.log("Contact page loaded"); 
    });
  }
}
