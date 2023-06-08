export interface FoodItem {
    id: number;
    name: string;
    price: number;
    rating: string;
    image: string;
  }
  export interface RestaurantItem {
    id: number;
    name: string;
    rating: string;
    image: string;
    items: FoodItem[];
  }
  