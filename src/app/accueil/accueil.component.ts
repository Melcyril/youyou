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

export class AccueilComponent{
  constructor(private globalService: GlobalService) {}
showDiv:boolean=false

onToggle():void{
  this.showDiv = !this.showDiv;
  this.globalService.isScrollAbout=!this.globalService.isScrollAbout
console.log('------'+this.showDiv+'iiii '+this.globalService.isScrollAbout)
}
} 
