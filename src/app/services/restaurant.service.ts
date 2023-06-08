import { Injectable } from '@angular/core';
import { RestaurantItem } from 'src/app/shared/interfaces';
import { FoodItem } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurants: RestaurantItem[] = [];

  constructor(private http: HttpClient) {
    this.fetchRestaurantsData().subscribe((data: RestaurantItem[]) => {
      this.restaurants = data;
    });
  }
  
  private fetchRestaurantsData(): Observable<RestaurantItem[]> {
    return this.http.get<RestaurantItem[]>('assets/restaurants.json');
  }
  
  getRestaurants(): Observable<RestaurantItem[]> {
    return this.fetchRestaurantsData();
  }  

  getRestaurantById(id: number): RestaurantItem | undefined {
    return this.restaurants.find((restaurant) => restaurant.id === id);
  }

  addRestaurant(restaurant: RestaurantItem): void {
    this.restaurants.push(restaurant);
  }

  // Add a method to get the food items of a specific restaurant
  getFoodItemsByRestaurantId(restaurantId: number): FoodItem[] {
    const restaurant = this.getRestaurantById(restaurantId);
    return restaurant ? restaurant.items : [];
  }

  getFoodItemById(restaurantId: number, foodId: number): FoodItem | undefined {
    const restaurant = this.getRestaurantById(restaurantId);
    return restaurant ? restaurant.items.find(item => item.id === foodId) : undefined;
  }
  
  getRestaurantByFoodId(foodId: number): RestaurantItem | undefined {
    for (const restaurant of this.restaurants) {
      const foodItem = restaurant.items.find(item => item.id === foodId);
      if (foodItem) {
        return restaurant;
      }
    }
    return undefined;
  }
}
