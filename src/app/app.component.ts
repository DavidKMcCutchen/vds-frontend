import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-services id="services"></app-services>
      <app-portfolio id="portfolio"></app-portfolio>
      <app-testimonials id="testimonials"></app-testimonials>
      <app-contact id="contact"></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    this.animationService.initScrollAnimations();
  }
}