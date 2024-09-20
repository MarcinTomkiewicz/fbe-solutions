import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { WindowRef } from '../../core/services/window-ref';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private windowRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    this.checkHash();
  }

  private checkHash() {
    const window = this.windowRef.nativeWindow;
    if (window) {
      const hash = window.location.hash;
      if (hash) {
        const element = this.document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
}