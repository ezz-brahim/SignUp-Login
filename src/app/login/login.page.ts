import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignUpPage } from '../sign-up/sign-up.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private modalController: ModalController) { }
  async OuvertSignup() {
    const modal = await this.modalController.create({
    component: SignUpPage
    });
  
    await modal.present();
  
  }

}
