import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FoodItem } from 'src/app/shared/interfaces';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cartItems: FoodItem[] = [];
  filteredItems: FoodItem[] = [];
  searchText: string = '';

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
  ) { }

  ionViewDidEnter() {
    this.loadCartItemsFromLocalStorage();
  }

  loadCartItemsFromLocalStorage() {
    this.cartService.carregarItensDoLocalStorage();
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
    this.filteredItems = this.cartItems; // Initialize filteredItems with all cart items
  }

  async removeFromCart(item: FoodItem) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to remove this item?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.cartService.removeFromCart(item);
            this.loadCartItems();
          },
        },
      ],
    });

    await alert.present();
  }

  searchItems() {
    if (this.searchText) {
      this.filteredItems = this.cartItems.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredItems = this.cartItems; // Reset filteredItems to all cart items
    }
  }

  getTotalPrice() {
    return this.cartService.getCartTotal();
  }
}
