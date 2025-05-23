import { CommonModule } from '@angular/common';
import { Component ,OnInit, HostListener } from '@angular/core';

@Component({
 selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Smooth scrolling para navegación
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Efecto parallax en el scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero') as HTMLElement;
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  }
}