import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { PortfolioItem } from '../../models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section portfolio-section">
      <div class="container">
        <div class="section-header text-center fade-in">
          <h2>Our Portfolio</h2>
          <p class="section-subtitle">
            Explore our recent projects and success stories
          </p>
        </div>
        
        <div class="portfolio-filters fade-in">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="filterPortfolio('all')"
          >
            All
          </button>
          <button 
            *ngFor="let category of categories" 
            class="filter-btn" 
            [class.active]="activeFilter === category"
            (click)="filterPortfolio(category)"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="portfolio-grid">
          <div 
            *ngFor="let item of filteredItems" 
            class="portfolio-item fade-in"
          >
            <div class="portfolio-image">
              <img [src]="item.image" [alt]="item.title">
              <div class="portfolio-overlay">
                <div class="portfolio-tech">
                  <span *ngFor="let tech of item.technologies">{{ tech }}</span>
                </div>
                <a href="#contact" class="portfolio-link">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-content">
              <h3 class="portfolio-title">{{ item.title }}</h3>
              <p class="portfolio-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio-section {
      background-color: var(--background-color);
    }
    
    .section-subtitle {
      max-width: 600px;
      margin: 0 auto 3rem;
    }
    
    .portfolio-filters {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
      gap: 1rem;
    }
    
    .filter-btn {
      background: none;
      border: none;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color-light);
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 30px;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .filter-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);
      border-radius: 30px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
      z-index: -1;
    }
    
    .filter-btn:hover, .filter-btn.active {
      color: white;
    }
    
    .filter-btn:hover::before, .filter-btn.active::before {
      transform: scaleX(1);
      transform-origin: left;
    }
    
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .portfolio-item {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px var(--shadow-color);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .portfolio-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px var(--shadow-color);
    }
    
    .portfolio-image {
      position: relative;
      overflow: hidden;
      height: 250px;
    }
    
    .portfolio-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .portfolio-item:hover .portfolio-image img {
      transform: scale(1.1);
    }
    
    .portfolio-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .portfolio-item:hover .portfolio-overlay {
      opacity: 1;
    }
    
    .portfolio-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .portfolio-tech span {
      background-color: var(--primary-color);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 30px;
      font-size: 0.8rem;
    }
    
    .portfolio-link {
      align-self: flex-end;
      background-color: white;
      color: var(--primary-color);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    .portfolio-link:hover {
      background-color: var(--primary-color);
      color: white;
    }
    
    .portfolio-content {
      padding: 1.5rem;
      background-color: var(--background-color);
    }
    
    .portfolio-title {
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
    }
    
    .portfolio-description {
      font-size: 0.95rem;
      margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
      .portfolio-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
    }
    
    @media (max-width: 576px) {
      .portfolio-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PortfolioComponent implements OnInit {
  portfolioItems: PortfolioItem[] = [];
  filteredItems: PortfolioItem[] = [];
  categories: string[] = [];
  activeFilter: string = 'all';
  
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.portfolioItems = this.dataService.getPortfolioItems();
    this.filteredItems = [...this.portfolioItems];
    
    // Extract unique categories
    const categorySet = new Set<string>();
    this.portfolioItems.forEach(item => categorySet.add(item.category));
    this.categories = Array.from(categorySet);
  }
  
  filterPortfolio(category: string): void {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredItems = [...this.portfolioItems];
    } else {
      this.filteredItems = this.portfolioItems.filter(item => item.category === category);
    }
  }
}