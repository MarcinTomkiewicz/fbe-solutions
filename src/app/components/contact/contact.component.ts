import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MessageModalComponent } from '../../common/message-modal/message-modal.component';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  modalService = inject(NgbModal);
  http = inject(HttpClient);
  private readonly breakpointObserver = inject(BreakpointObserver)
  private readonly fb =  inject(FormBuilder)
    topics = [
    'Zapytanie ofertowe / Wycena',
    'Zamówienie',
    'Ogólne'
  ];
  isSmallScreen = false;

  constructor() {
    this.contactForm = this.fb.group({
      topic: [this.topics[0]], // domyślny temat
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });

    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe(result => {
      this.isSmallScreen = result.matches; // Zapisz stan czy to jest mały ekran
    });
  }

  openModal() {
    // Używamy BreakpointObserver do sprawdzenia, czy ekran jest mniejszy niż xs
    if (this.isSmallScreen) {  // Otwórz modal tylko na małych ekranach
      const modalRef = this.modalService.open(MessageModalComponent, { 
        size: 'sm',
        centered: true,
      });

      modalRef.componentInstance.message = this.contactForm.get('message')?.value || '';

      modalRef.componentInstance.result$.pipe(take(1)).subscribe((result: string) => {
        this.contactForm.patchValue({ message: result });
      });
    }

  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.http.post('http://localhost:1337/api/contact', this.contactForm.value)
      .subscribe({
        next: (response) => {
          console.log('Form sent successfully:', response);
        },
        error: (error) => {
          console.error('Error sending form:', error);
        },
      });
    }
  }

  onReset() {
    this.contactForm.reset({
      topic: this.topics[0],
    });
  }
}
