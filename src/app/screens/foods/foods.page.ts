import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { FoodItem, RestaurantItem } from 'src/app/shared/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  selectedRestaurant: RestaurantItem | undefined;
  restaurantItems: FoodItem[] = [];
  filteredItems: FoodItem[] = [];
  searchText: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const restaurantId = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);
    this.restaurantService.getRestaurants().subscribe((restaurants: RestaurantItem[]) => {
      this.selectedRestaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
      this.restaurantItems = this.selectedRestaurant?.items || [];
      this.filteredItems = this.restaurantItems; // Initialize filteredItems with all food items
    });
  }  

  addToCart(item: FoodItem) {
    this.cartService.addToCart(item);
    this.cartService.salvarItensNoLocalStorage();
    this.router.navigate(['/cart']);
  }

  searchItems() {
    if (this.searchText) {
      this.filteredItems = this.restaurantItems.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredItems = this.restaurantItems; // Reset filteredItems to all food items
    }
  }
}
