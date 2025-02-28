import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkMode.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.setDarkMode(true);
    } else {
      this.setDarkMode(false);
    }
  }

  toggleTheme(): void {
    this.setDarkMode(!this.isDarkMode.value);
  }

  private setDarkMode(isDark: boolean): void {
    this.isDarkMode.next(isDark);
    
    if (isDark) {
      this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeAttribute(document.documentElement, 'data-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}