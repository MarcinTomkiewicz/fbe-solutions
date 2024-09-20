import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  topics = [
    'Zapytanie ofertowe / Wycena',
    'Zamówienie',
    'Ogólne'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      topic: [this.topics[0]], // domyślny temat
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Możesz tutaj dodać logikę do wysyłania formularza
    }
  }

  onReset() {
    this.contactForm.reset({
      topic: this.topics[0],
    });
  }
}
