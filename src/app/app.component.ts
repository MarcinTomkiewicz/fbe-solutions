import { AfterViewInit, Component, ElementRef, inject, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { WindowRef } from './core/services/window-ref';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'FBE Solutions';

  windowRef = inject(WindowRef);
  document: Document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID)
  
  constructor( ) {}

  @ViewChild('services') services!: ElementRef;
  
  ngAfterViewInit() {
    this.observeSections();
    setTimeout(() => {
      
    });
  }

  navigateToServices() {
    if (this.services) {
      this.services.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Services element is undefined');
    }
  }

  private observeSections() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = this.document.querySelectorAll(
        'app-about, app-services, app-portfolio, app-contact, app-main'
      );

      const observerOptions = {
        root: null, // viewport
        threshold: 0.5, // 50% widoczności
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const window = this.windowRef.nativeWindow;
            if (!window) return;
            window.history.pushState(null, '', `#${id}`);
          }
        });
      }, observerOptions);

      sections.forEach((section) => observer.observe(section));
    }
  }
}