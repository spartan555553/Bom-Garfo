import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  updateCredentials(){
    const emailInput = document.querySelector('ion-input[placeholder="New email"]') as HTMLInputElement;
    const passwordInput = document.querySelector('ion-input[placeholder="New password"]') as HTMLInputElement;
    const confirmpasswordInput = document.querySelector('ion-input[placeholder="Confirm password"]') as HTMLInputElement;
    
    const password = passwordInput.value;
    const email = emailInput.value;
    const confirmPassword = confirmpasswordInput.value;
  
    if (password === confirmPassword) {
      // Update the account data
      const account = {
        email,
        password
      };

      // Update the account data in local storage
      localStorage.setItem('account', JSON.stringify(account));

      console.log('Account data updated:', account);
    } else {
      console.log('Password and Confirm Password do not match.');
    }
  }
}
