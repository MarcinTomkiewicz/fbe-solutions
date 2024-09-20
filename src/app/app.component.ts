import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    NgbScrollSpyModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FBE Solutions';

  activeSection: string = 'main';

  // Obsługa aktywacji sekcji Scrollspy
  onActivate(event: any) {
    const activeLinkId = event.relatedTarget.id; // Pobieramy ID aktywnego linku
    console.log(event);
    

    switch (activeLinkId) {
      case 'about-link':
        this.activeSection = 'about';
        break;
      case 'services-link':
        this.activeSection = 'services';
        break;
      case 'portfolio-link':
        this.activeSection = 'portfolio';
        break;
      case 'contact-link':
        this.activeSection = 'contact';
        break;
      default:
        this.activeSection = 'about'; // Sekcja domyślna, np. O mnie
    }
  }
}
