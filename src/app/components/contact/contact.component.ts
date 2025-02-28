import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section contact-section">
      <div class="container">
        <div class="section-header text-center fade-in">
          <h2>Get In Touch</h2>
          <p class="section-subtitle">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
        </div>
        
        <div class="contact-container">
          <div class="contact-info slide-in-left">
            <div class="contact-method">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Our Location</h4>
                <p>123 Innovation Drive, Tech Park<br>San Francisco, CA 94107</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email Us</h4>
                <p>infoversadigital.com<br>supportversadigital.com</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="contact-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567<br>+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" aria-label="Facebook" class="social-link">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn" class="social-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div class="contact-form-container slide-in-right">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name" 
                  [class.invalid]="isFieldInvalid('name')"
                >
                <div *ngIf="isFieldInvalid('name')" class="error-message">
                  Please enter your name
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  [class.invalid]="isFieldInvalid('email')"
                >
                <div *ngIf="isFieldInvalid('email')" class="error-message">
                  Please enter a valid email address
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  [class.invalid]="isFieldInvalid('subject')"
                >
                <div *ngIf="isFieldInvalid('subject')" class="error-message">
                  Please enter a subject
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea 
                  id="message" 
                  formControlName="message" 
                  rows="5"
                  [class.invalid]="isFieldInvalid('message')"
                ></textarea>
                <div *ngIf="isFieldInvalid('message')" class="error-message">
                  Please enter your message
                </div>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary submit-btn" 
                [disabled]="contactForm.invalid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i> Sending...
                </span>
              </button>
              
              <div *ngIf="submitSuccess" class="success-message">
                <i class="fas fa-check-circle"></i>
                Your message has been sent successfully!
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: var(--background-color);
    }
    
    .section-subtitle {
      max-width: 600px;
      margin: 0 auto 3rem;
    }
    
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 3rem;
    }
    
    .contact-info {
      background-color: var(--background-secondary);
      padding: 2.5rem;
      border-radius: 8px;
      box-shadow: 0 5px 15px var(--shadow-color);
    }
    
    .contact-method {
      display: flex;
      margin-bottom: 2rem;
    }
    
    .contact-icon {
      width: 50px;
      height: 50px;
      background-color: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      margin-right: 1.5rem;
      flex-shrink: 0;
    }
    
    .contact-details h4 {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    
    .contact-details p {
      margin-bottom: 0;
    }
    
    .social-links {
      display: flex;
      margin-top: 2.5rem;
    }
    
    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-right: 1rem;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background-color: var(--secondary-color);
      transform: translateY(-5px);
    }
    
    .contact-form-container {
      background-color: var(--background-secondary);
      padding: 2.5rem;
      border-radius: 8px;
      box-shadow: 0 5px 15px var(--shadow-color);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--background-color);
      color: var(--text-color);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
      outline: none;
    }
    
    .form-group input.invalid,
    .form-group textarea.invalid {
      border-color: #e74c3c;
    }
    
    .error-message {
      color: #e74c3c;
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }
    
    .submit-btn {
      width: 100%;
      padding: 1rem;
    }
    
    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    .success-message {
      background-color: #2ecc71;
      color: white;
      padding: 1rem;
      border-radius: 4px;
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
    }
    
    .success-message i {
      margin-right: 0.5rem;
    }
    
    @media (max-width: 992px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 576px) {
      .contact-info, .contact-form-container {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  isFieldInvalid(field: string): boolean {
    const formControl = this.contactForm.get(field);
    return formControl ? formControl.invalid && (formControl.dirty || formControl.touched) : false;
  }
  
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 1500);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}