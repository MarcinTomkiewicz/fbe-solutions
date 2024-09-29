import { Component, ViewEncapsulation } from '@angular/core';
import { IServices } from '../../core/interfaces/i-services';
import { CommonModule } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NgbTooltip],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent {

  services: IServices[] = [
    {
      name: 'Wizytówka / Landing Page',
      price: 2000,
      priceOrMore: false,
      shortDescription: 'Stworzenie statycznej strony wizytówki, optymalizacja SEO i responsywność. Idealne dla małych firm, freelancerów, startupów.',
      longDescription: 'Wizytówka lub landing page to idealne rozwiązanie dla małych firm, freelancerów lub startupów, które potrzebują prostej, lecz efektywnej obecności w sieci. Projekt obejmuje stworzenie statycznej strony, która może zawierać informacje o firmie, jej usługach, galerię zdjęć, formularz kontaktowy oraz integrację z mediami społecznościowymi. Strona zostanie zoptymalizowana pod kątem SEO, co pomoże w lepszej widoczności w wynikach wyszukiwania. Całość będzie w pełni responsywna, co oznacza, że będzie działać na wszystkich urządzeniach, zarówno komputerach, jak i smartfonach.',
      realisation: '2 tygodnie',
    },
    {
      name: 'Blog / Portal Informacyjny',
      price: 3000,
      priceOrMore: false,
      shortDescription: 'Dynamiczny blog lub portal informacyjny. Cena nie uwzględnia backendu (backend po stronie klienta). Możliwość przygotowania backendu w Strapi lub Google Firebase, koszt ustalany indywidualnie.',
      longDescription: 'Tworzymy dynamiczne i funkcjonalne blogi oraz portale informacyjne, które pozwalają na łatwe zarządzanie treścią. Projekt obejmuje zaawansowane funkcje takie jak kategorie, tagi, system komentarzy, archiwum wpisów i możliwość integracji z mediami społecznościowymi. Istnieje opcja rozbudowy systemu o backend (na Strapi lub Google Firebase), który umożliwi zarządzanie bazą użytkowników oraz treściami. Cena nie obejmuje backendu, który może być dostarczony przez klienta lub stworzony indywidualnie jako dodatkowa usługa.',
      realisation: '2-3 tygodnie',
    },
    {
      name: 'Interaktywna Aplikacja Internetowa (frontend bez backendu)',
      price: 4000,
      priceOrMore: false,
      shortDescription: 'Aplikacja z funkcjami interaktywnymi, dynamiczne elementy, bez backendu (lub z backendem dostarczonym przez klienta).',
      longDescription: 'Nasza oferta obejmuje stworzenie interaktywnych aplikacji internetowych, które zawierają dynamiczne elementy oraz zaawansowane funkcje użytkownika, takie jak animacje, formularze, interaktywne tabele czy mapy. Tego typu aplikacje mogą być idealnym rozwiązaniem dla firm, które potrzebują platformy do zarządzania danymi lub realizacji specyficznych zadań bez konieczności korzystania z backendu (który może być dostarczony przez klienta).',
      realisation: '4 tygodnie',
    },
    {
      name: 'Interaktywna Aplikacja Internetowa z backendem (Strapi/Firebase)',
      price: 6000,
      priceOrMore: false,
      shortDescription: 'Frontend z backendem na Strapi lub Google Firebase. Idealne do aplikacji z zarządzaniem danymi, user-generated content.',
      longDescription: 'Tworzymy kompletne aplikacje internetowe z backendem opartym na Strapi lub Google Firebase. Tego typu aplikacje idealnie nadają się do zarządzania użytkownikami, danymi, treściami generowanymi przez użytkowników (user-generated content) oraz różnego rodzaju formularzami. Backend pozwala na łatwe zarządzanie danymi oraz użytkownikami z poziomu panelu administracyjnego. Rozwiązanie może być dostosowane do specyficznych potrzeb klienta, zarówno pod kątem funkcjonalności, jak i skalowalności.',
      realisation: 'Indywidualnie',
    },
    {
      name: 'Sklep Internetowy (backend dostarczony przez klienta)',
      price: 6000,
      priceOrMore: true,
      shortDescription: 'Kompleksowy frontend sklepu internetowego, z integracją dostarczonego backendu. Możliwość rozszerzeń o dodatkowe funkcje.',
      longDescription: 'Realizujemy kompleksowe frontendowe rozwiązania dla sklepów internetowych. Projekt obejmuje pełną integrację z dostarczonym backendem, który obsługuje system zarządzania produktami, koszykiem, zamówieniami oraz płatnościami. Możliwe jest rozszerzenie sklepu o dodatkowe funkcje, takie jak rekomendacje produktów, integracje z zewnętrznymi API, analityka oraz narzędzia marketingowe. Idealne rozwiązanie dla firm, które posiadają już backend i szukają nowoczesnego interfejsu użytkownika.',
      realisation: 'Indywidualnie',
    },
    {
      name: 'Sklep Internetowy (backend Strapi / Firebase)',
      price: 8000,
      priceOrMore: true,
      shortDescription: 'Kompletny sklep z backendem opartym o Strapi lub Google Firebase, z systemem zarządzania produktami, płatnościami, analityką.',
      longDescription: 'Oferujemy kompleksowe wdrożenie sklepu internetowego, który zawiera zarówno frontend, jak i backend oparty na Strapi lub Google Firebase. Sklep będzie posiadał zaawansowany system zarządzania produktami, system płatności, analitykę oraz możliwość integracji z różnymi platformami zewnętrznymi. Dzięki backendowi, właściciel sklepu będzie mógł zarządzać ofertą, zamówieniami, użytkownikami oraz promocjami z poziomu intuicyjnego panelu administracyjnego. Idealne rozwiązanie dla firm, które poszukują skalowalnego sklepu z możliwością rozbudowy.',
      realisation: 'Indywidualnie',
    }
  ];

}
