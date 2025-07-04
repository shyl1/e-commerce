import { Delivery, Discounts, Facebook, FreshProducts, Instagram, Price, Twitter } from "@/assets/icons/svgs";
import { AD1, AD2, AD3, AD4 } from "@/assets/images";

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
]