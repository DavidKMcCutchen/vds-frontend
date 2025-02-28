import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section testimonials-section">
      <div class="container">
        <div class="section-header text-center fade-in">
          <h2>Client Testimonials</h2>
          <p class="section-subtitle">
            What our clients say about our services and solutions
          </p>
        </div>
        
        <div class="testimonials-container">
          <div class="testimonials-wrapper" [style.transform]="'translateX(' + translateX + 'px)'">
            <div 
              *ngFor="let testimonial of testimonials" 
              class="testimonial-card fade-in"
            >
              <div class="testimonial-quote">
                <i class="fas fa-quote-left"></i>
                <p>{{ testimonial.quote }}</p>
              </div>
              
              <div class="testimonial-author">
                <div class="testimonial-image">
                  <img [src]="testimonial.image" [alt]="testimonial.name">
                </div>
                <div class="testimonial-info">
                  <h4>{{ testimonial.name }}</h4>
                  <p>{{ testimonial.position }}, {{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-controls">
            <button 
              class="control-btn prev" 
              (click)="prevTestimonial()"
              [disabled]="currentIndex === 0"
              aria-label="Previous testimonial"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            
            <div class="testimonial-dots">
              <span 
                *ngFor="let dot of dots; let i = index" 
                class="dot"
                [class.active]="i === currentIndex"
                (click)="goToTestimonial(i)"
              ></span>
            </div>
            
            <button 
              class="control-btn next" 
              (click)="nextTestimonial()"
              [disabled]="currentIndex === testimonials.length - 1"
              aria-label="Next testimonial"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background-color: var(--background-secondary);
    }
    
    .section-subtitle {
      max-width: 600px;
      margin: 0 auto 3rem;
    }
    
    .testimonials-container {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }
    
    .testimonials-wrapper {
      display: flex;
      transition: transform 0.5s ease;
    }
    
    .testimonial-card {
      min-width: 100%;
      padding: 2rem;
      background-color: var(--background-color);
      border-radius: 8px;
      box-shadow: 0 5px 15px var(--shadow-color);
    }
    
    .testimonial-quote {
      margin-bottom: 2rem;
    }
    
    .testimonial-quote i {
      font-size: 2rem;
      color: var(--primary-color);
      opacity: 0.5;
      margin-bottom: 1rem;
      display: block;
    }
    
    .testimonial-quote p {
      font-size: 1.1rem;
      line-height: 1.8;
      font-style: italic;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
    }
    
    .testimonial-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 1rem;
      border: 3px solid var(--primary-color);
    }
    
    .testimonial-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .testimonial-info h4 {
      margin-bottom: 0.3rem;
      font-size: 1.1rem;
    }
    
    .testimonial-info p {
      margin-bottom: 0;
      font-size: 0.9rem;
      color: var(--text-color-light);
    }
    
    .testimonial-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
    }
    
    .control-btn {
      background: none;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .control-btn:hover:not(:disabled) {
      background-color: var(--primary-color);
      color: white;
    }
    
    .control-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .testimonial-dots {
      display: flex;
      align-items: center;
      margin: 0 1rem;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--text-color-light);
      margin: 0 5px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .dot.active {
      background-color: var(--primary-color);
      transform: scale(1.3);
    }
    
    @media (max-width: 576px) {
      .testimonial-quote p {
        font-size: 1rem;
      }
    }
  `]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  currentIndex: number = 0;
  translateX: number = 0;
  dots: number[] = [];
  
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.testimonials = this.dataService.getTestimonials();
    this.dots = Array(this.testimonials.length).fill(0);
  }
  
  prevTestimonial(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTranslateX();
    }
  }
  
  nextTestimonial(): void {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
      this.updateTranslateX();
    }
  }
  
  goToTestimonial(index: number): void {
    this.currentIndex = index;
    this.updateTranslateX();
  }
  
  private updateTranslateX(): void {
    this.translateX = -this.currentIndex * 100;
  }
}