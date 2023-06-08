import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pubList: any[] = [];
  credentials: { email: string, pass: string } = { email: '', pass: '' };

  constructor(private navCtrl: NavController) {}

  checkCredentials() {
    const emailInput = document.querySelector(
      'ion-input[placeholder="Enter email"]'
    ) as HTMLInputElement;
    const passwordInput = document.querySelector(
      'ion-input[placeholder="Enter password"]'
    ) as HTMLInputElement;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Retrieve the saved account from local storage
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      const account = JSON.parse(savedAccount);
      if (account.email === email && account.password === password) {
        console.log('Correct credentials. You can proceed.');
        this.credentials.email = email;
        this.credentials.pass = password;
        this.navCtrl.navigateForward('restaurants');
        return; // Exit the method if the credentials match
      }
    }

    console.log('Incorrect credentials. Please check the email and password.');
    // Add your actions for incorrect credentials here
  }
}
