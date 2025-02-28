import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <a href="#" class="logo-link">
              <span class="logo-text">VDS</span>
            </a>
            <p>
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          
          <div class="footer-links">
            <div class="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div class="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Development</a></li>
                <li><a href="#services">AI Solutions</a></li>
                <li><a href="#services">Power Platform</a></li>
              </ul>
            </div>
            
            <div class="footer-links-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Versa Digital Solutions. All rights reserved.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <button 
        class="scroll-to-top" 
        (click)="scrollToTop()" 
        [class.visible]="showScrollTop"
        aria-label="Scroll to top"
      >
        <i class="fas fa-chevron-up"></i>
      </button>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--background-secondary);
      padding: 5rem 0 2rem;
      position: relative;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }
    
    .footer-logo .logo-text {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
    }
    
    .footer-logo p {
      margin-top: 1rem;
      max-width: 300px;
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    
    .footer-links-column h4 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.8rem;
    }
    
    .footer-links-column h4::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--primary-color);
    }
    
    .footer-links-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links-column li {
      margin-bottom: 0.8rem;
    }
    
    .footer-links-column a {
      color: var(--text-color-light);
      transition: color 0.3s ease, transform 0.3s ease;
      display: inline-block;
    }
    
    .footer-links-column a:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }
    
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
    }
    
    .footer-social {
      display: flex;
    }
    
    .footer-social a {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--background-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
      margin-left: 1rem;
      transition: all 0.3s ease;
    }
    
    .footer-social a:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
    
    .scroll-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      border: none;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .scroll-to-top.visible {
      opacity: 1;
      visibility: visible;
    }
    
    .scroll-to-top:hover {
      background-color: var(--secondary-color);
      transform: translateY(-5px);
    }
    
    @media (max-width: 992px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .footer-logo {
        text-align: center;
      }
      
      .footer-logo p {
        max-width: 100%;
      }
    }
    
    @media (max-width: 768px) {
      .footer-links {
        grid-template-columns: 1fr 1fr;
      }
      
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
      
      .footer-social {
        margin-top: 1rem;
        justify-content: center;
      }
      
      .footer-social a {
        margin: 0 0.5rem;
      }
    }
    
    @media (max-width: 576px) {
      .footer-links {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  showScrollTop: boolean = false;
  
  constructor() {
    window.addEventListener('scroll', this.checkScrollPosition.bind(this));
  }
  
  checkScrollPosition(): void {
    this.showScrollTop = window.scrollY > 300;
  }
  
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}