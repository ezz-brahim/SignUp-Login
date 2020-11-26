import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  constructor(private modalController: ModalController) { }
  async OuvertLogin() {
    const modal = await this.modalController.create({
    component: LoginPage
    });
  
    await modal.present();
  
  }


}
