import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section services-section">
      <div class="container">
        <div class="section-header text-center fade-in">
          <h2>Our Services</h2>
          <p class="section-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div class="services-grid">
          <div 
            *ngFor="let service of services; let i = index" 
            class="service-card"
            [ngClass]="{'slide-in-left': i % 2 === 0, 'slide-in-right': i % 2 !== 0}"
          >
            <div class="service-icon">
              <i [class]="service.icon"></i>
            </div>
            
            <h3 class="service-title">{{ service.title }}</h3>
            
            <p class="service-description">
              {{ service.description }}
            </p>
            
            <ul class="service-features">
              <li *ngFor="let feature of service.features">
                <i class="fas fa-check"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
            
            <a href="#contact" class="service-link">
              Learn More
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background-color: var(--background-secondary);
    }
    
    .section-subtitle {
      max-width: 600px;
      margin: 0 auto 3rem;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    
    .service-card {
      background-color: var(--background-color);
      border-radius: 8px;
      padding: 2.5rem 2rem;
      box-shadow: 0 5px 15px var(--shadow-color);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      opacity: 0.05;
      transition: height 0.3s ease;
      z-index: -1;
    }
    
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px var(--shadow-color);
    }
    
    .service-card:hover::before {
      height: 100%;
    }
    
    .service-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      transition: transform 0.3s ease;
    }
    
    .service-card:hover .service-icon {
      transform: scale(1.1);
    }
    
    .service-title {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    .service-description {
      margin-bottom: 1.5rem;
    }
    
    .service-features {
      list-style: none;
      margin: 0 0 1.5rem;
      padding: 0;
    }
    
    .service-features li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.8rem;
    }
    
    .service-features i {
      color: var(--secondary-color);
      margin-right: 0.8rem;
      margin-top: 0.3rem;
    }
    
    .service-link {
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .service-link i {
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
    }
    
    .service-link:hover i {
      transform: translateX(5px);
    }
    
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.services = this.dataService.getServices();
  }
}