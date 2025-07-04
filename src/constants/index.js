import { Delivery, Discounts, Facebook, FreshProducts, Instagram, Price, Twitter } from "@/assets/icons/svgs";
import { AD1, AD2, AD3, AD4 } from "@/assets/images";
import { Beverages, BiscuitsandSnacks, Bread, BreadsandBakery, BreakfastandDairy, Coffee, Egg, FrozenFoods, FruitsandVegetables, GroceryandStaples, HouseholdNeeds, MeatsansSeafood } from "@/assets/images/task4";

// hero section
export const ImgUrl = [
  {
    img : AD1,
  }, 
  {
    img: AD2,
  },
  {
    img : AD3,
  },
  {
    img : AD4,
  },
];

// pages to show pagination 
export  const pages = [
    {
      name: "Home",
      path: '/',
    },
    {
      name: 'Cart',
      path:'/cart',
    },
    {
      name: 'Checkout',
      path: '/checkout',
    }
  ];

export const categories = [
  { title: 'Beverages', count: 11, image: Beverages },
  { title: 'Biscuits & Snacks', count: 6, image: BiscuitsandSnacks },
  { title: 'Breads & Bakery', count: 6, image: BreadsandBakery },
  { title: 'Breakfast & Dairy', count: 8, image: BreakfastandDairy },
  { title: 'Frozen Foods', count: 7, image:  FrozenFoods },
  { title: 'Fruits & Vegetables', count: 11, image: FruitsandVegetables },
  { title: 'Grocery & Staples', count: 7, image: GroceryandStaples },
  { title: 'Household Needs', count: 1, image: HouseholdNeeds },
  { title: 'Meats & Seafood', count: 5, image: MeatsansSeafood },
];

export const promos = [
  {
    title: "Natural Eggs",
    subtitle: "Eat one every day",
    image: Egg, 
  },
  {
    title: "Taste the Best",
    subtitle: "Shine the morning",
    image: Bread, 
  },
  {
    title: "Ditch the Junk",
    subtitle: "Breakfast made better",
    image: Coffee, 
  },
];

// sidebar in Shop
export const ProductCategory = [
  "Beverages",
  "Biscults & Snacks",
  "Breads & Bakery",
  "Breakfast & Dairy",
  "Frozen Foods",
  "Fruits & Vegetables",
  "Grocery & Staples",
  "Hausehold Needs",
  "Meats & Seafood"
];

export const Brands = [
  {
    name: "Frito Lay",
    quantity: 8,
  },
  {
    name: "Quaker",
    quantity: 36,
  },
  {
    name: "Cola",
    quantity: 1,
  },
  {
    name: "Welch's",
    quantity: 1,
  },
  {
    name: "Oreo",
    quantity: 18,
  },
];

export const avalablity = [
  {
    name: "In Stock",
    quantity: 62,
  },
  {
    name: "Out of Stock",
    quantity: 0,
  }
];


// slider break points
export const responsive = {
  superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 6},
  desktop: {breakpoint: { max: 3000, min: 1024 },items: 5},
  desktop2: {breakpoint: { max: 1024, min: 800 },items: 3},
  tablet: { breakpoint: { max: 800, min: 464 }, items: 2 },
  mobile: {breakpoint: { max: 464, min: 0 },items: 1}, 
};

export const VerticalBorder = [
    {
      name: "Beverages",
    },
    {
      name: "Biscuits & Snacks",
    },
    {
      name: "Breads & Bakery",
    },
    {
      name: "Breakfast & Dairy",
    },
    {
      name: "Frozen Foods",
    },
    {
      name: "Fruits & Vegetables",
    },
    {
      name: "Grocery & Staples",
    },
    {
      name: "Household Needs",
    },
    {
      name: "Meats & Seafood",
    },
  ];


// Footer section
export const FooterList = [
          { title: 'FRUIT & VEGETABLES', items: ['Fresh Vegetables', 'Herbs & Seasonings', 'Fresh Fruits', 'Cuts & Sprouts', 'Exotic Fruits & Veggies', 'Packaged Produce', 'Party Trays'] },
          { title: 'BREAKFAST & DAIRY', items: ['Milk & Flavoured Milk', 'Butter and Margarine', 'Cheese', 'Eggs Substitutes', 'Honey', 'Marmalades', 'Sour Cream and Dips', 'Yogurt'] },
          { title: 'MEAT & SEAFOOD', items: ['Breakfast Sausage', 'Dinner Sausage', 'Beef', 'Chicken', 'Sliced Deli Meat', 'Shrimp', 'Wild Caught Fillets', 'Crab and Shellfish', 'Farm Raised Fillets'] },
          { title: 'BEVERAGES', items: ['Water', 'Sparkling Water', 'Soda & Pop', 'Coffee', 'Milk & Plant-Based Milk', 'Tea & Kombucha', 'Drink Boxes & Pouches', 'Craft Beer', 'Wine'] },
          { title: 'BREADS & BAKERY', items: ['Milk & Flavoured Milk', 'Butter and Margarine', 'Cheese', 'Eggs Substitutes', 'Honey', 'Marmalades', 'Sour Cream and Dips', 'Yogurt'] }
        ];

export const footerIcons = [
          { icon: FreshProducts , text: "Everyday fresh products" },
          { icon: Delivery, text: "Free delivery for order over $70" },
          { icon: Discounts, text: "Daily Mega Discounts" },
          { icon: Price, text: "Best price on the market" }
        ];

export const footerSocial = [
  Facebook,
  Twitter,
  Instagram,
];

  // const Products = [
  //   {
  //     name: "American CheeseSingles",
  //     image: "/src/assets/images/task4/product1.png",
  //     price1:"$8.29",
  //     price2:'$3.29',
  //     discount:'60%'
  //   },
  //   {
  //     name: "Blueberries – 1 PintPackage",
  //     image: "/src/assets/images/task4/product3.png",
  //     price1:"$4.49",
  //     price2:'$3.99',
  //     discount:'11%'
  //   },
  //   {
  //     name: "Chobani CompleteVanilla Greek Yogurt",
  //     image: "/src/assets/images/task4/product2.png",
  //     price1:"$5.49",
  //     price2:'$4.49',
  //     discount:'18%'
  //   },
  //   {
  //     name: "Challenge SpreadableButter",
  //     image: "/src/assets/images/task4/product4.png",
  //     price2:'$7.58'
  //   },
  //   {
  //     name: "Fairlife Lactose-Free2% Milk",
  //     image: "/src/assets/images/task4/product5.png",
  //     price2:"$3.69"
  //   },
  //   {
  //     name: "Nestle Original Coffee-Mate Coffee Creamer",
  //     image: "/src/assets/images/task4/product6.png",
  //     price1:"$13.99",
  //     price2:'$11.99',
  //     discount:'14%'
  //   },
  //   {
  //     name: "Organic Cage-FreeGrade A Large Brown…",
  //     image: "/src/assets/images/task4/product7.png",
  //     price1:"$4.69",
  //     price2:'$3.69',
  //     discount:'21%'
  //   },
  //   {
  //         name: "Vital Farms Pasture-Raised Egg Bites…",
  //         image: "/src/assets/images/task4/product8.png",
  //         price1:"$29.00",
  //         price2:'$25.00',
  //         discount:'14%'
  //   },
  // ];
