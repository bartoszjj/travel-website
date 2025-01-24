import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductCards.module.css";

function ProductCards() {
  return (
    <div className={styles.productCardsWrapper}>
      <h1 className={styles.mainHeading}>Products</h1>
      <ul className={styles.cardsContainer}>
        <ProductCard
          href="/"
          title={"Last minute Deals"}
          price={599}
          info={[
            "Paris this weekend? Bali next week? The world is waiting!",
            "Up to 50% off for bookings made within 48 hours!",
            "Hurry! These deals are gone in the blink of an eye.",
            "Find your escape now – book before it’s too late!",
          ]}
          hoursLeft={"02:59:59"}
        />
        <ProductCard
          href="/"
          title={"All-Inclusive Packages"}
          price={1299}
          info={[
            "Flights, stays, meals, activities – it’s all covered!",
            "Enjoy stress-free vacations with zero hidden costs.",
            "Perfect for families, couples, and solo travelers looking for comfort.",
            "Explore our all-inclusive deals now!",
          ]}
          hoursLeft={"02:59:59"}
        />
        <ProductCard
          href="/"
          title={"Winter 2024/25"}
          price={899}
          info={[
            "Ski in the Alps, chase the Northern Lights in Iceland, or cozy up in a Swiss chalet.",
            "Snowshoeing, hot springs, and festive markets – all at your fingertips.",
            "Book early for exclusive perks and discounts!",
            "Discover your winter getaway!",
          ]}
          hoursLeft={"02:59:59"}
        />
      </ul>
    </div>
  );
}

export default ProductCards;
