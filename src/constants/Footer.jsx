
import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  FreshProducts,
  Delivery,
  Discounts,
  Price,
  Tele,
  Envlope,
} from '../assets/icons/svgs';

import {
  GooglePlay,
  AppStore,
  Payments,
  Coupon,
} from '../assets/images';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 text-sm mt-10">
      {/* Newsletter Banner */}
      <div className="bg-teal-500 text-white px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[250px] py-10 relative overflow-hidden h-70">
        <div className="max-w-6xl mx-auto text-left">
          <p className="text-sm mb-1">
            <span className="underline underline-offset-4">$20 discount</span> for your first order
          </p>
          <h2 className="text-2xl font-semibold mb-2">Join our newsletter and get...</h2>
          <p className="mb-4">
            Join our email subscription now to get updates<br />
            on promotions and coupons.
          </p>
          <div className="relative max-w-md w-full">
            <Envlope className="h-4 w-auto absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white focus:outline-none focus:ring-0 px-4 py-3 pr-32 pl-12 rounded-md text-gray-800 w-full h-15"
            />
            <button
              className="absolute top-1/2 right-1 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md h-13"
            >
              Subscribe
            </button>
          </div>
        </div>
        <img src={Coupon} alt="Banner"
          className="absolute bottom-0 right-4 sm:right-10 md:right-20 lg:right-40 xl:right-60 2xl:right-80 w-24 sm:w-36 md:w-60 lg:w-72 xl:w-80 2xl:w-[26rem] hidden md:block"
        />
      </div>

      {/* Feature Icons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-6 px-4 bg-[#F7F8FD] sm:px-6 md:px-10 lg:px-[100px] xl:px-[250px] text-center">
        {[
          { icon: <FreshProducts className="w-5 h-5" />, text: "Everyday fresh products" },
          { icon: <Delivery className="w-5 h-5" />, text: "Free delivery for order over $70" },
          { icon: <Discounts className="w-5 h-5" />, text: "Daily Mega Discounts" },
          { icon: <Price className="w-5 h-5" />, text: "Best price on the market" }
        ].map((item, i, arr) => (
          <React.Fragment key={i}>
            <div className="flex items-center justify-center gap-2">
              {item.icon}
              <span className="text-[#202435] font-medium">{item.text}</span>
            </div>
            {i < arr.length - 1 && (
              <div className="hidden md:block w-px h-7 bg-gray-300 mx-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Divider */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[250px]">
        <div className="w-full border-t border-gray-200"></div>
      </div>

      {/* Category Columns */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-10 px-4 bg-[#F7F8FD] sm:px-6 md:px-10 lg:px-[100px] xl:px-[250px]">
        {[
          { title: 'FRUIT & VEGETABLES', items: ['Fresh Vegetables', 'Herbs & Seasonings', 'Fresh Fruits', 'Cuts & Sprouts', 'Exotic Fruits & Veggies', 'Packaged Produce', 'Party Trays'] },
          { title: 'BREAKFAST & DAIRY', items: ['Milk & Flavoured Milk', 'Butter and Margarine', 'Cheese', 'Eggs Substitutes', 'Honey', 'Marmalades', 'Sour Cream and Dips', 'Yogurt'] },
          { title: 'MEAT & SEAFOOD', items: ['Breakfast Sausage', 'Dinner Sausage', 'Beef', 'Chicken', 'Sliced Deli Meat', 'Shrimp', 'Wild Caught Fillets', 'Crab and Shellfish', 'Farm Raised Fillets'] },
          { title: 'BEVERAGES', items: ['Water', 'Sparkling Water', 'Soda & Pop', 'Coffee', 'Milk & Plant-Based Milk', 'Tea & Kombucha', 'Drink Boxes & Pouches', 'Craft Beer', 'Wine'] },
          { title: 'BREADS & BAKERY', items: ['Milk & Flavoured Milk', 'Butter and Margarine', 'Cheese', 'Eggs Substitutes', 'Honey', 'Marmalades', 'Sour Cream and Dips', 'Yogurt'] }
        ].map((col, idx) => (
          <div key={idx}>
            <h3 className="font-bold mb-2 text-sm">{col.title}</h3>
            <ul className="space-y-1 text-xs text-[#71778E]">
              {col.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[250px] py-6 bg-white gap-6">
        <div className="flex items-start gap-2">
          <Tele className="w-8 h-8 mt-1" />
          <div>
            <p className="font-bold text-xl">8 800 555-55</p>
            <p className="text-xs text-[#71778E]">Working 8:00 - 22:00</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 text-right w-full md:w-auto">
          <div className="text-xs">
            <p className="font-medium text-sm">Download App on Mobile :</p>
            <p className="text-[#71778E]">15% discount on your first purchase</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={GooglePlay} className="h-10 w-auto" />
            <img src={AppStore} className="h-10 w-auto" />
          </div>

          <div className="flex gap-2 items-center">
            <Facebook className="w-8 h-8" />
            <Twitter className="w-8 h-8" />
            <Instagram className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Divider Before Copyright */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[250px]">
        <div className="w-full border-t border-gray-300"></div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[250px] py-4 text-xs bg-white text-[#71778E] gap-4">
        <div className="w-full md:w-auto text-left">
          © 2025 All rights reserved by Blackrice Theme
        </div>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4 md:ml-auto text-right">
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Cookie</a>
          </div>
          <img src={Payments} className="h-6" alt="Payment Methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
