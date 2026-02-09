export const products = [
  // Cakes
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    category: "cakes",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    description: "Rich chocolate cake with smooth fudge frosting",
    rating: 4.8,
    badge: "Bestseller",
    ingredients: ["Chocolate", "Flour", "Eggs", "Butter", "Sugar"],
    size: "8 inch",
    weight: "1.2 kg"
  },
  {
    id: 2,
    name: "Vanilla Birthday Cake",
    category: "cakes",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400",
    description: "Classic vanilla cake with buttercream frosting",
    rating: 4.6,
    ingredients: ["Vanilla", "Flour", "Eggs", "Butter", "Sugar"],
    size: "10 inch",
    weight: "1.5 kg"
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    category: "cakes",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1534907293453-1e518b8c9c3d?w=400",
    description: "Moist red velvet with cream cheese frosting",
    rating: 4.9,
    badge: "Premium",
    ingredients: ["Red Velvet", "Cream Cheese", "Flour", "Eggs", "Butter"],
    size: "9 inch",
    weight: "1.3 kg"
  },
  {
    id: 4,
    name: "Strawberry Shortcake",
    category: "cakes",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Fresh strawberries with whipped cream",
    rating: 4.7,
    ingredients: ["Strawberries", "Cream", "Flour", "Eggs", "Sugar"],
    size: "8 inch",
    weight: "1.1 kg"
  },
  {
    id: 5,
    name: "Lemon Drizzle Cake",
    category: "cakes",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Zesty lemon cake with sweet drizzle",
    rating: 4.5,
    ingredients: ["Lemon", "Flour", "Eggs", "Butter", "Sugar"],
    size: "8 inch",
    weight: "1.0 kg"
  },
  
  // Pastries
  {
    id: 6,
    name: "Croissant",
    category: "pastries",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1555507036-ab1f40378039?w=400",
    description: "Buttery, flaky French croissant",
    rating: 4.7,
    ingredients: ["Flour", "Butter", "Yeast", "Milk", "Salt"],
    weight: "80g"
  },
  {
    id: 7,
    name: "Danish Pastry",
    category: "pastries",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400",
    description: "Sweet pastry with fruit filling",
    rating: 4.5,
    ingredients: ["Flour", "Butter", "Fruits", "Sugar", "Eggs"],
    weight: "100g"
  },
  {
    id: 8,
    name: "Eclair",
    category: "pastries",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1561097034-9b9d09437d67?w=400",
    description: "Choux pastry with chocolate cream",
    rating: 4.8,
    badge: "Popular",
    ingredients: ["Choux Pastry", "Chocolate", "Cream", "Sugar", "Butter"],
    weight: "120g"
  },
  {
    id: 9,
    name: "Fruit Tart",
    category: "pastries",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Fresh fruits on vanilla custard",
    rating: 4.6,
    ingredients: ["Fruits", "Custard", "Pastry", "Sugar", "Butter"],
    weight: "150g"
  },
  {
    id: 10,
    name: "Apple Turnover",
    category: "pastries",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Warm apple filling in flaky pastry",
    rating: 4.4,
    ingredients: ["Apples", "Pastry", "Cinnamon", "Sugar", "Butter"],
    weight: "90g"
  },
  
  // Chocolates
  {
    id: 11,
    name: "Belgian Chocolate Box",
    category: "chocolates",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1546904283-1d8b0180a535?w=400",
    description: "Assorted premium Belgian chocolates",
    rating: 4.9,
    badge: "Luxury",
    ingredients: ["Belgian Chocolate", "Cocoa", "Sugar", "Milk", "Nuts"],
    weight: "250g"
  },
  {
    id: 12,
    name: "Chocolate Truffles",
    category: "chocolates",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400",
    description: "Handmade dark chocolate truffles",
    rating: 4.7,
    ingredients: ["Dark Chocolate", "Cream", "Cocoa", "Sugar", "Butter"],
    weight: "200g"
  },
  {
    id: 13,
    name: "Chocolate Covered Strawberries",
    category: "chocolates",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1601695840963-0a8a3e7f6b6d?w=400",
    description: "Fresh strawberries dipped in chocolate",
    rating: 4.8,
    ingredients: ["Strawberries", "Chocolate", "Sugar", "Cream", "Cocoa"],
    weight: "300g"
  },
  {
    id: 14,
    name: "Milk Chocolate Bar",
    category: "chocolates",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Smooth milk chocolate bar",
    rating: 4.5,
    ingredients: ["Milk Chocolate", "Sugar", "Cocoa Butter", "Milk", "Vanilla"],
    weight: "100g"
  },
  {
    id: 15,
    name: "White Chocolate Almonds",
    category: "chocolates",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Crunchy almonds in white chocolate",
    rating: 4.6,
    ingredients: ["Almonds", "White Chocolate", "Sugar", "Cocoa Butter", "Vanilla"],
    weight: "150g"
  },
  
  // Cold Drinks
  {
    id: 16,
    name: "Fresh Orange Juice",
    category: "colddrinks",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
    description: "Freshly squeezed orange juice",
    rating: 4.7,
    badge: "Fresh",
    ingredients: ["Oranges", "Ice", "Sugar"],
    size: "500ml",
    isCold: true
  },
  {
    id: 17,
    name: "Iced Coffee",
    category: "colddrinks",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1517706128144-4c7b5b0c8b2c?w=400",
    description: "Chilled coffee with milk",
    rating: 4.6,
    ingredients: ["Coffee", "Milk", "Ice", "Sugar"],
    size: "400ml",
    isCold: true
  },
  {
    id: 18,
    name: "Mango Smoothie",
    category: "colddrinks",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400",
    description: "Creamy mango smoothie",
    rating: 4.8,
    ingredients: ["Mango", "Yogurt", "Milk", "Honey", "Ice"],
    size: "450ml",
    isCold: true
  },
  {
    id: 19,
    name: "Lemon Iced Tea",
    category: "colddrinks",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1546776792-7f654799c37a?w=400",
    description: "Refreshing lemon iced tea",
    rating: 4.5,
    ingredients: ["Tea", "Lemon", "Sugar", "Ice", "Mint"],
    size: "500ml",
    isCold: true
  },
  {
    id: 20,
    name: "Chocolate Milkshake",
    category: "colddrinks",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    description: "Thick chocolate milkshake",
    rating: 4.9,
    badge: "Popular",
    ingredients: ["Chocolate", "Milk", "Ice Cream", "Whipped Cream"],
    size: "400ml",
    isCold: true
  },
  {
    id: 21,
    name: "Berry Blast",
    category: "colddrinks",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400",
    description: "Mixed berry smoothie",
    rating: 4.7,
    ingredients: ["Mixed Berries", "Yogurt", "Honey", "Ice"],
    size: "450ml",
    isCold: true
  },
  
  // Ice Cream
  {
    id: 22,
    name: "Vanilla Ice Cream",
    category: "icecream",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1568901349378-999c4e4241b3?w=400",
    description: "Classic vanilla ice cream",
    rating: 4.6,
    ingredients: ["Milk", "Cream", "Sugar", "Vanilla", "Eggs"],
    size: "Scoop",
    isCold: true
  },
  {
    id: 23,
    name: "Chocolate Ice Cream",
    category: "icecream",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1568901349378-999c4e4241b3?w=400",
    description: "Rich chocolate ice cream",
    rating: 4.8,
    badge: "Favorite",
    ingredients: ["Milk", "Cream", "Chocolate", "Sugar", "Eggs"],
    size: "Scoop",
    isCold: true
  },
  {
    id: 24,
    name: "Strawberry Ice Cream",
    category: "icecream",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1568901349378-999c4e4241b3?w=400",
    description: "Fresh strawberry ice cream",
    rating: 4.7,
    ingredients: ["Strawberries", "Milk", "Cream", "Sugar", "Eggs"],
    size: "Scoop",
    isCold: true
  },
  {
    id: 25,
    name: "Mint Chocolate Chip",
    category: "icecream",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1568901349378-999c4e4241b3?w=400",
    description: "Mint ice cream with chocolate chips",
    rating: 4.5,
    ingredients: ["Mint", "Chocolate Chips", "Milk", "Cream", "Sugar"],
    size: "Scoop",
    isCold: true
  },
  
  // Donuts
  {
    id: 26,
    name: "Glazed Donut",
    category: "donuts",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1551024601-b66d6c5c5b1c?w=400",
    description: "Classic glazed donut",
    rating: 4.7,
    badge: "Popular",
    ingredients: ["Flour", "Sugar", "Glaze", "Yeast", "Butter"],
    weight: "70g"
  },
  {
    id: 27,
    name: "Chocolate Donut",
    category: "donuts",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1551024601-b66d6c5c5b1c?w=400",
    description: "Chocolate frosted donut",
    rating: 4.6,
    ingredients: ["Flour", "Chocolate", "Sugar", "Yeast", "Butter"],
    weight: "75g"
  },
  {
    id: 28,
    name: "Boston Cream Donut",
    category: "donuts",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1551024601-b66d6c5c5b1c?w=400",
    description: "Cream filled with chocolate topping",
    rating: 4.8,
    ingredients: ["Flour", "Cream", "Chocolate", "Eggs", "Sugar"],
    weight: "80g"
  },
  {
    id: 29,
    name: "Jelly Donut",
    category: "donuts",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1551024601-b66d6c5c5b1c?w=400",
    description: "Strawberry jelly filled donut",
    rating: 4.5,
    ingredients: ["Flour", "Jelly", "Sugar", "Yeast", "Butter"],
    weight: "72g"
  },
  
  // Muffins
  {
    id: 30,
    name: "Blueberry Muffin",
    category: "muffins",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Fresh blueberry muffin",
    rating: 4.6,
    ingredients: ["Blueberries", "Flour", "Sugar", "Eggs", "Butter"],
    weight: "100g"
  },
  {
    id: 31,
    name: "Chocolate Chip Muffin",
    category: "muffins",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Chocolate chip muffin",
    rating: 4.7,
    badge: "Favorite",
    ingredients: ["Chocolate Chips", "Flour", "Sugar", "Eggs", "Butter"],
    weight: "95g"
  },
  {
    id: 32,
    name: "Banana Nut Muffin",
    category: "muffins",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Banana walnut muffin",
    rating: 4.5,
    ingredients: ["Banana", "Walnuts", "Flour", "Sugar", "Eggs"],
    weight: "105g"
  },
  
  // Pizza
  {
    id: 33,
    name: "Margherita Pizza",
    category: "pizza",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Classic pizza with fresh mozzarella and basil",
    rating: 4.6,
    ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"],
    size: "12 inch",
    weight: "500g"
  },
  {
    id: 34,
    name: "Pepperoni Pizza",
    category: "pizza",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Spicy pepperoni with mozzarella cheese",
    rating: 4.7,
    badge: "Hot",
    ingredients: ["Dough", "Pepperoni", "Mozzarella", "Tomato Sauce", "Herbs"],
    size: "12 inch",
    weight: "550g"
  },
  {
    id: 35,
    name: "Veggie Supreme",
    category: "pizza",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Loaded with fresh vegetables",
    rating: 4.5,
    ingredients: ["Dough", "Vegetables", "Mozzarella", "Tomato Sauce", "Herbs"],
    size: "12 inch",
    weight: "520g"
  },
  
  // Patties
  {
    id: 36,
    name: "Beef Patty",
    category: "patties",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Seasoned beef in flaky pastry",
    rating: 4.4,
    ingredients: ["Beef", "Pastry", "Onions", "Spices", "Eggs"],
    weight: "120g"
  },
  {
    id: 37,
    name: "Chicken Patty",
    category: "patties",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Tender chicken filling",
    rating: 4.3,
    ingredients: ["Chicken", "Pastry", "Vegetables", "Spices", "Cream"],
    weight: "110g"
  },
  {
    id: 38,
    name: "Vegetable Patty",
    category: "patties",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Mixed vegetables in spiced pastry",
    rating: 4.2,
    ingredients: ["Vegetables", "Pastry", "Spices", "Onions", "Herbs"],
    weight: "100g"
  },
  
  // Cookies
  {
    id: 39,
    name: "Chocolate Chip Cookies",
    category: "cookies",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1499636133215-9051d0b94cfd?w=400",
    description: "Classic homemade chocolate chip cookies",
    rating: 4.8,
    badge: "Favorite",
    ingredients: ["Chocolate Chips", "Flour", "Butter", "Sugar", "Eggs"],
    weight: "200g (6 pcs)"
  },
  {
    id: 40,
    name: "Oatmeal Raisin Cookies",
    category: "cookies",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1509440229545-1e8bc7702c4f?w=400",
    description: "Soft oatmeal cookies with raisins",
    rating: 4.5,
    ingredients: ["Oats", "Raisins", "Flour", "Butter", "Sugar"],
    weight: "180g (6 pcs)"
  },
  {
    id: 41,
    name: "Macadamia Nut Cookies",
    category: "cookies",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1499636133215-9051d0b94cfd?w=400",
    description: "Buttery cookies with macadamia nuts",
    rating: 4.6,
    ingredients: ["Macadamia Nuts", "Flour", "Butter", "Sugar", "Eggs"],
    weight: "200g (6 pcs)"
  },
  
  // Breads
  {
    id: 42,
    name: "Sourdough Bread",
    category: "breads",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
    description: "Artisan sourdough with crispy crust",
    rating: 4.7,
    ingredients: ["Flour", "Water", "Yeast", "Salt", "Sourdough Starter"],
    weight: "500g"
  },
  {
    id: 43,
    name: "Whole Wheat Bread",
    category: "breads",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1509440229545-1e8bc7702c4f?w=400",
    description: "Healthy whole wheat loaf",
    rating: 4.4,
    ingredients: ["Whole Wheat", "Yeast", "Water", "Salt", "Honey"],
    weight: "450g"
  },
  {
    id: 44,
    name: "French Baguette",
    category: "breads",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
    description: "Traditional French baguette",
    rating: 4.6,
    ingredients: ["Flour", "Yeast", "Water", "Salt", "Sugar"],
    weight: "250g"
  },
  
  // Sandwiches
  {
    id: 45,
    name: "Club Sandwich",
    category: "sandwiches",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Triple decker club sandwich",
    rating: 4.7,
    badge: "Popular",
    ingredients: ["Bread", "Chicken", "Bacon", "Lettuce", "Tomato", "Mayo"],
    weight: "350g"
  },
  {
    id: 46,
    name: "Veggie Sandwich",
    category: "sandwiches",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Fresh vegetable sandwich",
    rating: 4.5,
    ingredients: ["Bread", "Vegetables", "Cheese", "Lettuce", "Mayo"],
    weight: "280g"
  },
  {
    id: 47,
    name: "Grilled Cheese",
    category: "sandwiches",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Classic grilled cheese sandwich",
    rating: 4.6,
    ingredients: ["Bread", "Cheese", "Butter", "Salt", "Pepper"],
    weight: "250g"
  },
  
  // Pies
  {
    id: 48,
    name: "Apple Pie",
    category: "pies",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Traditional apple pie with cinnamon",
    rating: 4.8,
    badge: "Classic",
    ingredients: ["Apples", "Pastry", "Cinnamon", "Sugar", "Butter"],
    size: "8 inch",
    weight: "800g"
  },
  {
    id: 49,
    name: "Pumpkin Pie",
    category: "pies",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Spiced pumpkin pie",
    rating: 4.6,
    ingredients: ["Pumpkin", "Pastry", "Spices", "Cream", "Sugar"],
    size: "8 inch",
    weight: "750g"
  },
  {
    id: 50,
    name: "Cherry Pie",
    category: "pies",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Sweet cherry pie",
    rating: 4.7,
    ingredients: ["Cherries", "Pastry", "Sugar", "Cornstarch", "Butter"],
    size: "8 inch",
    weight: "780g"
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: "🍽️", color: "from-gray-500 to-gray-600" },
  { id: "cakes", name: "Cakes", icon: "🎂", color: "from-pink-500 to-pink-600" },
  { id: "pastries", name: "Pastries", icon: "🥐", color: "from-yellow-500 to-yellow-600" },
  { id: "chocolates", name: "Chocolates", icon: "🍫", color: "from-amber-600 to-amber-700" },
  { id: "colddrinks", name: "Cold Drinks", icon: "🥤", color: "from-blue-500 to-blue-600" },
  { id: "icecream", name: "Ice Cream", icon: "🍦", color: "from-purple-500 to-purple-600" },
  { id: "donuts", name: "Donuts", icon: "🍩", color: "from-pink-400 to-pink-500" },
  { id: "muffins", name: "Muffins", icon: "🧁", color: "from-orange-500 to-orange-600" },
  { id: "pizza", name: "Pizza", icon: "🍕", color: "from-red-500 to-red-600" },
  { id: "patties", name: "Patties", icon: "🥟", color: "from-green-500 to-green-600" },
  { id: "cookies", name: "Cookies", icon: "🍪", color: "from-yellow-600 to-yellow-700" },
  { id: "breads", name: "Breads", icon: "🍞", color: "from-amber-500 to-amber-600" },
  { id: "sandwiches", name: "Sandwiches", icon: "🥪", color: "from-green-600 to-green-700" },
  { id: "pies", name: "Pies", icon: "🥧", color: "from-orange-600 to-orange-700" }
];

export const heroSlides = [
  {
    id: 1,
    title: "Artisan Baked Goods",
    subtitle: "Freshly baked with love every day",
    image: "https://images.unsplash.com/photo-1559276524-31731d3851ee?w=1200",
    cta: "Order Now"
  },
  {
    id: 2,
    title: "Premium Cakes & Pastries",
    subtitle: "Indulge in our sweet creations",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200",
    cta: "Explore Menu"
  },
  {
    id: 3,
    title: "Fresh Bread Daily",
    subtitle: "Traditional recipes, modern taste",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=1200",
    cta: "View Products"
  }
];