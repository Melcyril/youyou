import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isHomePage: boolean = true;
  isScrollAbout: boolean=false;
}
