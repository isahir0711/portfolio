import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private renderer: Renderer2) {
  }


  ngOnInit(): void {
    this.applyTheme();
    // Detectar cambios en el esquema de color preferido del dispositivo
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.onPreferredColorSchemeChange.bind(this));
  }

  changeIcons(): void{

  }

  toggleTheme(): void {
    const html = document.getElementsByTagName('html')[0];
    const isDarkTheme = html.classList.contains('theme-dark');
    this.renderer.removeClass(html, isDarkTheme ? 'theme-dark' : 'theme-light');
    this.renderer.addClass(html, isDarkTheme ? 'theme-light' : 'theme-dark');
  }

  applyTheme(): void {
    const preferredTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkTheme = preferredTheme === 'theme-dark' || (!preferredTheme && userPrefersDark);

    const html = document.getElementsByTagName('html')[0];
    this.renderer.addClass(html, isDarkTheme ? 'theme-dark' : 'theme-light');
    if(isDarkTheme){
      const toggle = document.getElementById('toggleInput')?.setAttribute('checked','true');      
    }else{
      const toggle = document.getElementById('toggleInput')?.setAttribute('checked','false');
    }
  }


  onMenuClick(): void {
    const nav = document.querySelector('.navlinks');
    if(nav !== null){
      nav.classList.toggle("active")
    }
  }
  
  closeMenu(): void{
    const nav = document.querySelector('.navlinks');
    if(nav !== null){
      if(nav.classList.contains("active"))
      {
        nav.classList.remove("active");
      }
    }
  }

  onPreferredColorSchemeChange(event: MediaQueryListEvent): void {
    const newColorScheme = event.matches ? 'dark' : 'light';

    const checkbox = document.getElementById('toggleInput') as HTMLInputElement | null;
    
    const html = document.getElementsByTagName('html')[0];

    if (newColorScheme === 'dark') {
      this.renderer.removeClass(html, 'theme-light');
      this.renderer.addClass(html, 'theme-dark');
      if (checkbox != null) {
        checkbox.checked=true;
      }
    } else {
      this.renderer.removeClass(html, 'theme-dark');
      this.renderer.addClass(html, 'theme-light');if (checkbox != null) {
        checkbox.checked=false;
      }
    }
  }
}

