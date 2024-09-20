import { Component } from '@angular/core';
import { IServices } from '../../core/interfaces/i-services';
import { CommonModule } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NgbTooltip],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {



  services: IServices[] = [
    {
      name: 'Wizytówka / Landing Page',
      price: 2000,
      priceOrMore: false,
      description: 'Stworzenie statycznej strony wizytówki, optymalizacja SEO i responsywność. Idealne dla małych firm, freelancerów, startupów.',
      realisation: '2 tygodnie',
    },
    {
      name: 'Blog / Portal Informacyjny',
      price: 3000,
      priceOrMore: false,
      description: 'Dynamiczny blog lub portal informacyjny. Cena nie uwzględnia backendu (backend po stronie klienta). Możliwość przygotowania backendu w Strapi lub Google Firebase, koszt ustalany indywidualnie.',
      realisation: '2-3 tygodnie',
    },
    {
      name: 'Interaktywna Aplikacja Internetowa (frontend bez backendu)',
      price: 4000,
      priceOrMore: false,
      description: 'Aplikacja z funkcjami interaktywnymi, dynamiczne elementy, bez backendu (lub z backendem dostarczonym przez klienta).',
      realisation: '4 tygodnie',
    },
    {
      name: 'Interaktywna Aplikacja Internetowa z backendem (Strapi/Firebase)',
      price: 6000,
      priceOrMore: false,
      description: 'Frontend z backendem na Strapi lub Google Firebase. Idealne do aplikacji z zarządzaniem danymi, user-generated content.',
      realisation: 'Indywidualnie',
    },
    {
      name: 'Sklep Internetowy (backend dostarczony przez klienta)',
      price: 6000,
      priceOrMore: true,
      description: 'Kompleksowy frontend sklepu internetowego, z integracją dostarczonego backendu. Możliwość rozszerzeń o dodatkowe funkcje.',
      realisation: 'Indywidualnie',
    },
    {
      name: 'Sklep Internetowy (backend Strapi / Firebase)',
      price: 8000,
      priceOrMore: true,
      description: 'Kompletny sklep z backendem opartym o Strapi lub Google Firebase, z systemem zarządzania produktami, płatnościami, analityką.',
      realisation: 'Indywidualnie',
    }
  ];

}