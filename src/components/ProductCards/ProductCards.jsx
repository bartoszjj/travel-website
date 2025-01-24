import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductCards.module.css";

function ProductCards() {
  return (
    <div className={styles.productCardsWrapper}>
      <h1 className={styles.mainHeading}>Products</h1>
      <ul className={styles.cardsContainer}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </ul>
    </div>
  );
}

export default ProductCards;
