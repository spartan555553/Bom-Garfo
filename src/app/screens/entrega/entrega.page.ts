import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {
  isOrderPlaced: boolean = false;
  isOrderPrepared: boolean = false;
  isOrderInDelivery: boolean = false;
  isOrderDelivered: boolean = false;

  constructor() {}

  ngOnInit() {
    this.animateCheckboxes();
  }

  animateCheckboxes() {
    setTimeout(() => {
      this.isOrderPlaced = true;
    }, 1000);

    setTimeout(() => {
      this.isOrderPrepared = true;
    }, 2000);

    setTimeout(() => {
      this.isOrderInDelivery = true;
    }, 3000);

    setTimeout(() => {
      this.isOrderDelivered = true;
    }, 4000);
  }
}
