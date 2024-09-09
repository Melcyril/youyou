import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-apropos',
  templateUrl:'./apropos.component.html',
  styles: [
  ]
})
export class AproposComponent {
  showDiv:boolean=false
  constructor(private globalService: GlobalService) {}
  onToggle():void{
    this.showDiv = !this.showDiv;
    this.globalService.isScrollAbout=!this.globalService.isScrollAbout
  console.log('------'+this.showDiv+'iiii '+this.globalService.isScrollAbout)
  }
}
