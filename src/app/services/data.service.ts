import { Injectable } from '@angular/core';
import { Service } from '../models/service.model';
import { Testimonial } from '../models/testimonial.model';
import { PortfolioItem } from '../models/portfolio-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getServices(): Service[] {
    return [
      {
        id: 'web-dev',
        title: 'Web Development',
        description: 'We create responsive, modern web solutions that drive business growth and enhance user experience.',
        icon: 'fa-solid fa-code',
        features: [
          'Responsive design for all devices',
          'Progressive Web Apps (PWA)',
          'E-commerce solutions',
          'Content Management Systems',
          'Custom web applications'
        ]
      },
      {
        id: 'mobile-dev',
        title: 'Mobile Development',
        description: 'Our cross-platform expertise delivers seamless mobile experiences across iOS and Android devices.',
        icon: 'fa-solid fa-mobile-screen',
        features: [
          'Native iOS and Android apps',
          'Cross-platform development',
          'Mobile app UI/UX design',
          'App store optimization',
          'Maintenance and support'
        ]
      },
      {
        id: 'ai-solutions',
        title: 'AI Solutions',
        description: 'Leverage the power of machine learning and automation to transform your business processes.',
        icon: 'fa-solid fa-brain',
        features: [
          'Machine learning integration',
          'Natural language processing',
          'Predictive analytics',
          'Computer vision solutions',
          'AI-powered chatbots'
        ]
      },
      {
        id: 'power-platform',
        title: 'Microsoft Power Platform',
        description: 'Streamline your business processes with custom Power Platform solutions tailored to your needs.',
        icon: 'fa-solid fa-bolt',
        features: [
          'Power BI dashboards and reports',
          'Power Apps custom applications',
          'Power Automate workflow automation',
          'Power Virtual Agents',
          'Dataverse integration'
        ]
      }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 'testimonial1',
        name: 'Sarah Johnson',
        position: 'CTO',
        company: 'TechNova Inc.',
        quote: 'Versa Digital Solutions transformed our outdated systems into a streamlined digital ecosystem. Their expertise in web development and AI integration has given us a competitive edge in our industry.',
        image: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      {
        id: 'testimonial2',
        name: 'Michael Chen',
        position: 'Marketing Director',
        company: 'Global Retail Group',
        quote: 'The mobile application developed by Versa Digital Solutions has significantly increased our customer engagement and sales. Their team was professional, responsive, and delivered beyond our expectations.',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'testimonial3',
        name: 'Emily Rodriguez',
        position: 'Operations Manager',
        company: 'HealthPlus',
        quote: 'Implementing Microsoft Power Platform solutions with Versa Digital has revolutionized our workflow efficiency. We\'ve reduced manual processes by 70% and improved data accuracy across all departments.',
        image: 'https://randomuser.me/api/portraits/women/45.jpg'
      }
    ];
  }

  getPortfolioItems(): PortfolioItem[] {
    return [
      {
        id: 'portfolio1',
        title: 'HealthTrack Patient Portal',
        description: 'A comprehensive patient management system with secure access to medical records, appointment scheduling, and telemedicine integration.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Web Development',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'WebRTC']
      },
      {
        id: 'portfolio2',
        title: 'RetailPro Mobile App',
        description: 'Cross-platform mobile application for a major retail chain, featuring inventory management, customer loyalty program, and contactless payments.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Mobile Development',
        technologies: ['React Native', 'Firebase', 'Stripe API']
      },
      {
        id: 'portfolio3',
        title: 'SmartFactory AI Solution',
        description: 'AI-powered predictive maintenance system for manufacturing equipment, reducing downtime by 35% and maintenance costs by 25%.',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'AI Solutions',
        technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Azure ML']
      },
      {
        id: 'portfolio4',
        title: 'Financial Services Dashboard',
        description: 'Comprehensive Power BI dashboard for a financial services company, providing real-time insights into market trends and portfolio performance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Microsoft Power Platform',
        technologies: ['Power BI', 'Power Automate', 'SharePoint', 'SQL Server']
      }
    ];
  }
}