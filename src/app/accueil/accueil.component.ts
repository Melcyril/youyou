import { group } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GlobalService } from '../global.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: [
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        visibility:'hidden',
        opacity: 0
      })),
      state('*', style({
        visibility:'visible' ,
        opacity: 1
      })),
      transition('void <=> *', animate(800)),
    ]),
  ]

})

export class AccueilComponent {
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

