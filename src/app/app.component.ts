import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <app-menu></app-menu>
    <div class="backgroundcolor">

<div class="animation">
       <h1 class="titreFull">DEVELOPPEUR FULLSTACK</h1>
</div>
<app-animation-caractere></app-animation-caractere>
<app-apropos></app-apropos>


<app-skills></app-skills>


<app-projet></app-projet>   

<app-interet></app-interet>
<!--
<app-gestion></app-gestion> -->
<app-animation-caractere></app-animation-caractere>
<app-contact></app-contact> 
    <app-animation-tree></app-animation-tree>

  `,
  styles: []
})
export class AppComponent{


showScrollbar = false; // Variable pour afficher/masquer la barre de défilement

// Méthode pour détecter le défilement
@HostListener('window:scroll', ['$event'])

onScroll(event: UIEvent): void {
  // Affichez la barre de défilement pendant le défilement
  this.showScrollbar = true;

  // Réinitialisez le délai d'inactivité
  clearTimeout(this.scrollTimeout);

  // Masquez la barre de défilement après 2 secondes d'inactivité
  this.scrollTimeout = setTimeout(() => {
    this.showScrollbar = false;
  }, 2000);
}

private scrollTimeout: any; // Variable pour gérer le délai d'inactivité


}
