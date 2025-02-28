import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled">
      <div class="container header-container">
        <div class="logo">
          <a href="#" class="logo-link">
            <span class="logo-text">VDS</span>
          </a>
        </div>
        
        <nav [class.active]="isMenuOpen">
          <ul class="nav-links">
            <li><a href="#" (click)="closeMenu()">Home</a></li>
            <li><a href="#services" (click)="closeMenu()">Services</a></li>
            <li><a href="#portfolio" (click)="closeMenu()">Portfolio</a></li>
            <li><a href="#testimonials" (click)="closeMenu()">Testimonials</a></li>
            <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <button 
            class="theme-toggle" 
            (click)="toggleTheme()" 
            [attr.aria-label]="(isDarkMode$ | async) ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i [class]="(isDarkMode$ | async) ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          
          <button 
            class="mobile-menu-toggle" 
            (click)="toggleMenu()"
            [attr.aria-label]="isMenuOpen ? 'Close menu' : 'Open menu'"
            [attr.aria-expanded]="isMenuOpen"
          >
            <span [class.active]="isMenuOpen"></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1.5rem 0;
      transition: all 0.3s ease;
      background-color: transparent;
    }
    
    header.scrolled {
      background-color: var(--background-color);
      box-shadow: 0 2px 10px var(--shadow-color);
      padding: 1rem 0;
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    
    .logo-text {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--primary-color);
      margin-left: 0.5rem;
    }
    
    nav {
      display: flex;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-links li {
      margin: 0 1.2rem;
    }
    
    .nav-links a {
      color: var(--text-color);
      font-weight: 500;
      text-decoration: none;
      position: relative;
      padding: 0.5rem 0;
      transition: color 0.3s ease;
    }
    
    .nav-links a:hover {
      color: var(--primary-color);
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }
    
    .header-actions {
      display: flex;
      align-items: center;
    }
    
    .theme-toggle {
      background: none;
      border: none;
      color: var(--text-color);
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.5rem;
      margin-right: 1rem;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    
    .theme-toggle:hover {
      color: var(--primary-color);
      transform: rotate(15deg);
    }
    
    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 25px;
      position: relative;
    }
    
    .mobile-menu-toggle span,
    .mobile-menu-toggle span::before,
    .mobile-menu-toggle span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--text-color);
      transition: all 0.3s ease;
    }
    
    .mobile-menu-toggle span {
      top: 50%;
      transform: translateY(-50%);
    }
    
    .mobile-menu-toggle span::before {
      content: '';
      top: -8px;
    }
    
    .mobile-menu-toggle span::after {
      content: '';
      bottom: -8px;
    }
    
    .mobile-menu-toggle span.active {
      background-color: transparent;
    }
    
    .mobile-menu-toggle span.active::before {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle span.active::after {
      transform: rotate(-45deg) translate(7px, -8px);
    }
    
    @media (max-width: 992px) {
      .mobile-menu-toggle {
        display: block;
      }
      
      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 400px;
        height: 100vh;
        background-color: var(--background-color);
        box-shadow: -5px 0 15px var(--shadow-color);
        padding: 6rem 2rem 2rem;
        transition: right 0.3s ease;
        z-index: 999;
      }
      
      nav.active {
        right: 0;
      }
      
      .nav-links {
        flex-direction: column;
        width: 100%;
      }
      
      .nav-links li {
        margin: 1rem 0;
      }
      
      .nav-links a {
        display: block;
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  
  isScrolled = false;
  isMenuOpen = false;
  isDarkMode$ = this.themeService.isDarkMode$;
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Prevent scrolling when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}