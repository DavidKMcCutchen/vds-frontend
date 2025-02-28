import { Injectable, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      gsap.registerPlugin(ScrollTrigger);
    });
  }

  initScrollAnimations(): void {
    this.ngZone.runOutsideAngular(() => {
      // Animate elements with fade-in class
      gsap.utils.toArray('.fade-in').forEach((element: any) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleClass: 'visible',
            once: true
          }
        });
      });

      // Animate elements with slide-in-left class
      gsap.utils.toArray('.slide-in-left').forEach((element: any) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleClass: 'visible',
            once: true
          }
        });
      });

      // Animate elements with slide-in-right class
      gsap.utils.toArray('.slide-in-right').forEach((element: any) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleClass: 'visible',
            once: true
          }
        });
      });
    });
  }

  animateHeroSection(): void {
    this.ngZone.runOutsideAngular(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-logo', { 
        opacity: 0, 
        y: -50, 
        duration: 1, 
        ease: 'power3.out' 
      })
      .from('.hero-title', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.5')
      .from('.hero-subtitle', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.5')
      .from('.hero-cta', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.5');
    });
  }

  refreshScrollTrigger(): void {
    this.ngZone.runOutsideAngular(() => {
      ScrollTrigger.refresh();
    });
  }
}