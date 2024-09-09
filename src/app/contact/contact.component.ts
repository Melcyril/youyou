import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from "../../environments/environnement"
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent {
  messageSent = false;
  nom: string =""
  prenom: string =""
  email: string =""
  message: string =""
  


  onSubmit(contactForm: NgForm) {
    if(contactForm.valid){
    // Traitez les données ici (par exemple, envoyez-les par e-mail)
    console.log('Données soumises :', this.nom, this.prenom, this.email, this.message);
    
    // Appelez votre service d'envoi d'e-mail ici
    //this.mailService.sendEmail(this.nom, this.prenom, this.email, this.message);
    emailjs.init(environment.apiKey_);
    emailjs.send(environment.idService_,environment.idTemplate_,{
      email: this.email,
      nom: this.nom,
      prenom: this.prenom,
      message: this.message,
      }).then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        contactForm.reset();
        this.messageSent=true
        setTimeout(() => { this.messageSent = false; }, 5000);
    }, (error) => {
        console.log(error.text);
    });
  }else{
    console.log('Le formulaire est invalide.');
  }
  }
}
