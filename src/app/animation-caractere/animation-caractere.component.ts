import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-animation-caractere',
  templateUrl: 'animation-caractere.component.html',
  styles: [
  ],
  animations: [
    trigger('titleAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
          animate('25ms', style({ opacity: 1 })),
          animate('12.5ms', style({ opacity: 0.5 })),
          animate('37.5ms', style({ opacity: 1 })),
          animate('25ms', style({ opacity: 0 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class AnimationCaractereComponent {
  titlesIntro=['Projet web','Projet desktop', 'Projet mobile','Création d\'API','Base de données'];
  currentTitleIntro = '';
  currentLetterIndexIntro = 0;
  currentTitleIndexIntro = 0;
  titles = ['Un projet à réàliser ?','Avez vous besoin d\'une application ?', 'Avez vous besoin d\'un renseignement','N\'hésitez pas à en parler','Contactez-moi'];
  currentTitle = '';
  currentLetterIndex = 0;
  currentTitleIndex = 0;

  constructor() {
    this.animateTitlesIntro();
    this.animateTitles();
  }
  animateTitlesIntro() {
    if (this.currentLetterIndexIntro < this.titlesIntro[this.currentTitleIndexIntro].length) {
      this.currentTitleIntro += this.titlesIntro[this.currentTitleIndexIntro][this.currentLetterIndexIntro++];
      setTimeout(() => this.animateTitlesIntro(), 100);
    } else {
      setTimeout(() => {
        this.currentTitleIntro = '';
        this.currentLetterIndexIntro = 0;
        this.currentTitleIndexIntro = (this.currentTitleIndexIntro + 1) % this.titlesIntro.length;
        this.animateTitlesIntro();
      }, 1500); // Temps total de l'animation d'opacité
    }
  }
  animateTitles() {
    if (this.currentLetterIndex < this.titles[this.currentTitleIndex].length) {
      this.currentTitle += this.titles[this.currentTitleIndex][this.currentLetterIndex++];
      setTimeout(() => this.animateTitles(), 100);
    } else {
      setTimeout(() => {
        this.currentTitle = '';
        this.currentLetterIndex = 0;
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        this.animateTitles();
      }, 1500); // Temps total de l'animation d'opacité
    }
  }
}
