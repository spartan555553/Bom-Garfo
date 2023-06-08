import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  createAccount() {
    const emailInput = document.querySelector('ion-input[placeholder="Enter email"]') as HTMLInputElement;
    const passwordInput = document.querySelector('ion-input[placeholder="Enter password"]') as HTMLInputElement;
    const confirmpasswordInput = document.querySelector('ion-input[placeholder="Confirm password"]') as HTMLInputElement;
    
    const password = passwordInput.value;
    const email = emailInput.value;
    const confirmPassword = confirmpasswordInput.value;

    if (password === confirmPassword) {
      // Passwords match, proceed to create the account
      const account = {
        email,
        password
      };

      // Save the account in local storage
      localStorage.setItem('account', JSON.stringify(account));

      console.log('Account created and saved in local storage:', account);
    } else {
      // Passwords don't match, handle the error
      console.log('Password and Confirm Password do not match.');
    }
  }
}
