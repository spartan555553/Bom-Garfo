import { Injectable } from '@angular/core';
import { FoodItem } from '../shared/interfaces';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: FoodItem[] = [];
  storageKey = 'cart_items';

  constructor(private platform: Platform) {
  }

  addToCart(item: FoodItem) {
    this.cartItems.push(item);
  }

  removeFromCart(item: FoodItem) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems(): FoodItem[] {
    return this.cartItems;
  }

  getCartTotal(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart() {
    this.cartItems = [];
  }

  salvarItensNoLocalStorage() {
    if (this.platform.is('cordova')) {
      document.addEventListener('deviceready', () => {
        localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
      });
    } else {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    }
  }

  carregarItensDoLocalStorage() {
    const itens = localStorage.getItem(this.storageKey);
    if (itens) {
      this.cartItems = JSON.parse(itens);
    }
  }
}
