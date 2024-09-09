import { Component, HostListener, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { PROJETS } from '../../shared/projet-mock'; 
import {Projet} from '../../shared/projet';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2,private globalService: GlobalService) {}
  monNom:string="Melin"
  monPrenom:string="Cyril"
  private prevX = 0;
  private prevY = 0;
  activeLink: string = '';
  showMenu:boolean = false;
  ngOnInit(): void {
    if(this.showMenu = window.innerWidth < 600){
      this.showMenu=this.showMenu!
    }
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const deltaX = e.pageX - this.prevX;
    const deltaY = e.pageY - this.prevY;

    const velocityX = Math.abs(deltaX) / 1000; // Ajustez le facteur de vitesse
    const velocityY = Math.abs(deltaY) / 1000; // Ajustez le facteur de vitesse

    const scaleX = 1 + velocityX;
    const scaleY = 1 + velocityY;
    console.log(scaleX+'_'+scaleY)
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `scaleX(${scaleX}) scaleY(${scaleY})`
    );

    this.prevX = e.pageX;
    this.prevY = e.pageY;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showMenu = window.innerWidth < 600; // Met à jour showMenu en fonction de la largeur de l'écran
  }
  toggleMenu() {
    this.showMenu= !this.showMenu;
  }
  scrollTo(lien:string) {
    if(lien=='about'&& this.globalService.isScrollAbout==false){
      lien='fullstack'
    }
    const skillsSection = document.getElementById(lien);
 
    if (skillsSection) {
        this.activeLink =lien
        skillsSection.scrollIntoView({ behavior: 'smooth' });
        this.showMenu= window.innerWidth < 600;
    } 
    for(let i=0;i<PROJETS.length;i++){
      PROJETS[i].detailsVisible=false
    }
  }
  
  
}
