import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-logo">
            <span class="logo-icon"><i class="fas fa-code-branch"></i></span>
            <span class="logo-text">Versa Digital Solutions</span>
          </div>
          
          <h1 class="hero-title">
            Transforming Businesses Through <span class="highlight">Digital Innovation</span>
          </h1>
          
          <p class="hero-subtitle">
            We create cutting-edge digital solutions that drive growth, enhance efficiency, and deliver exceptional user experiences.
          </p>
          
          <div class="hero-cta">
            <a href="#contact" class="btn btn-primary">Get Started</a>
            <a href="#services" class="btn btn-secondary">Our Services</a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="hero-shape"></div>
          <div class="hero-dots"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 6rem 0;
    }
    
    .hero-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
    }
    
    .hero-content {
      max-width: 600px;
    }
    
    .hero-logo {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
    }
    
    .logo-icon {
      font-size: 2rem;
      color: var(--primary-color);
      margin-right: 1rem;
    }
    
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    .highlight {
      color: var(--primary-color);
      position: relative;
    }
    
    .highlight::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: var(--secondary-color);
      opacity: 0.3;
      z-index: -1;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      max-width: 90%;
    }
    
    .hero-cta {
      display: flex;
      gap: 1rem;
    }
    
    .hero-visual {
      position: relative;
      width: 40%;
      height: 500px;
    }
    
    .hero-shape {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: morphShape 15s ease-in-out infinite;
      opacity: 0.8;
    }
    
    .hero-dots {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(var(--text-color-light) 1px, transparent 1px);
      background-size: 20px 20px;
      opacity: 0.1;
    }
    
    @keyframes morphShape {
      0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
      25% {
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
      }
      50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      }
      75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
      }
      100% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
    }
    
    @media (max-width: 992px) {
      .hero-container {
        flex-direction: column;
        text-align: center;
      }
      
      .hero-content {
        max-width: 100%;
        margin-bottom: 3rem;
      }
      
      .hero-logo {
        justify-content: center;
      }
      
      .hero-title {
        font-size: 2.8rem;
      }
      
      .hero-subtitle {
        max-width: 100%;
      }
      
      .hero-cta {
        justify-content: center;
      }
      
      .hero-visual {
        width: 100%;
        height: 300px;
      }
      
      .hero-shape {
        width: 300px;
        height: 300px;
      }
    }
    
    @media (max-width: 576px) {
      .hero-title {
        font-size: 2.2rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }
      
      .hero-cta {
        flex-direction: column;
        width: 100%;
      }
      
      .hero-cta .btn {
        width: 100%;
      }
      
      .hero-visual {
        height: 250px;
      }
      
      .hero-shape {
        width: 250px;
        height: 250px;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  constructor(private animationService: AnimationService) {}
  
  ngOnInit(): void {
    this.animationService.animateHeroSection();
  }
}