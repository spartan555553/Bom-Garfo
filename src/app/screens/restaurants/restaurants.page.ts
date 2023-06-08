import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantItem } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restaurants: RestaurantItem[] = [];
  searchText: string = '';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((restaurants: RestaurantItem[]) => {
      this.restaurants = restaurants;
    });
  }

  searchRestaurants() {
    this.restaurantService.getRestaurants().subscribe((restaurants: RestaurantItem[]) => {
      const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().startsWith(this.searchText.toLowerCase())
      );
      this.restaurants = filteredRestaurants;
    });
  }
  
  
}
