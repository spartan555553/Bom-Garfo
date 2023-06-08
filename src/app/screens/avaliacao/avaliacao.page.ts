import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {
  serviceStars: number[] = [];
  orderStars: number[] = [];
  serviceRating: number = 0;
  orderRating: number = 0;

  constructor() {}

  ngOnInit() {
    const maxStars = 5; // Set the desired maximum number of stars
    this.serviceStars = Array.from({ length: maxStars }, (_, index) => index + 1);
    this.orderStars = Array.from({ length: maxStars }, (_, index) => index + 1);
  }

  rateService(rating: number) {
    this.serviceRating = rating;
  }

  rateOrder(rating: number) {
    this.orderRating = rating;
  }

  getServiceStarIconName(star: number): string {
    if (star <= this.serviceRating) {
      return 'star-sharp';
    } else {
      return 'star-outline';
    }
  }

  getOrderStarIconName(star: number): string {
    if (star <= this.orderRating) {
      return 'star-sharp';
    } else {
      return 'star-outline';
    }
  }

  logRatings() {
    console.log('Service Rating:', this.serviceRating);
    console.log('Order Rating:', this.orderRating);
  }
}
