import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators, } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor() {
   
    this.contactForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),    
      lname: new FormControl('', [Validators.required]),     
      no: new FormControl('', [Validators.required]),        
      gender: new FormControl('', [Validators.required]),    
      bio: new FormControl('', [Validators.required]) 
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);   // Print form values
    } else {
      console.log("Form is not valid.");
    }
}
}