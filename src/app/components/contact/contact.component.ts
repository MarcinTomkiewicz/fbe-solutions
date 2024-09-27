import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MessageModalComponent } from '../../common/message-modal/message-modal.component';
import { take } from 'rxjs';

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
  private breakpointObserver = inject(BreakpointObserver)
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

  openModal() {
    // Używamy BreakpointObserver do sprawdzenia, czy ekran jest mniejszy niż xs
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe(result => {
      console.log(result);
      
      if (result.matches) {
        // Otwieramy modal z klasą large-modal
        const modalRef = this.modalService.open(MessageModalComponent, { 
          size: 'sm',
          centered: true,
        });
        
        modalRef.componentInstance.message = this.contactForm.get('message')?.value || '';
  
        modalRef.componentInstance.result$.pipe(take(1)).subscribe((result: string) => {
          this.contactForm.patchValue({ message: result });
        });
      }
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
