import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";

function Cards() {
  return (
    <ul className={styles.cardsWrapper}>
      <Card
        href={"waterfall-in-the-amazon-jungle"}
        src={"/images/img-9.jpg"}
        alt={
          "A man standing atop a rock in front of a waterfall in the Amazon Jungle"
        }
        title={"Explore the hidden waterfall deep inside the Amazon Jungle"}
        label={"Adventure"}
      ></Card>
      <Card
        href={"private-cruise-in-bali"}
        src={"/images/img-2.jpg"}
        alt={"Aerial view of the Islands of Bali"}
        title={"Travel through the Islands of Bali in a Private Cruise"}
        label={"Luxury"}
      ></Card>
      <Card
        href={"sail-in-the-atlantic"}
        src={"/images/img-3.jpg"}
        alt={"Aerial view of a boat in the ocean"}
        title={"Set Sail in the Atlantic Ocean visiting Uncharted Waters"}
        label={"Mystery"}
      ></Card>
      <Card
        href={"football-himalayan-mountains"}
        src={"/images/img-4.jpg"}
        alt={"Aerial view of a football field atop a mountain"}
        title={"Experience Football on Top of the Himalayan Mountains"}
        label={"Adventure"}
      ></Card>
      <Card
        href={"sahara-desert-camel-tour"}
        src={"/images/img-8.jpg"}
        alt={"A line of camels wandering among sand dunes"}
        title={"Ride through the Sahara Desert on a guided camel tour"}
        label={"Adrenaline"}
      ></Card>
    </ul>
  );
}

export default Cards;
