import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";

function Cards() {
  return (
    <ul className={styles.cardsWrapper}>
      <Card
        src={"/images/img-9.jpg"}
        alt={
          "A man standing atop a rock in front of a waterfall in the Amazon Jungle"
        }
        title={"Explore the hidden waterfall deep inside the Amazon Jungle"}
      ></Card>
      <Card
        src={"/images/img-2.jpg"}
        alt={"Aerial view of the Islands of Bali"}
        title={"Travel through the Islands of Bali in a Private Cruise"}
      ></Card>
      <Card
        src={"/images/img-3.jpg"}
        alt={"Aerial view of a boat in the ocean"}
        title={"Set Sail in the Atlantic Ocean visiting Uncharted Waters"}
      ></Card>
      <Card
        src={"/images/img-4.jpg"}
        alt={"Aerial view of a football field atop a mountain"}
        title={"Experience Football on Top of the Himalayan Mountains"}
      ></Card>
      <Card
        src={"/images/img-8.jpg"}
        alt={"A line of camels wandering among sand dunes"}
        title={"Ride through the Sahara Desert on a guided camel tour"}
      ></Card>
    </ul>
  );
}

export default Cards;
