import React from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import styles from "./ServiceItems.module.css";
import {
  Cross,
  Shield,
  Earth,
  Car,
  Hotel,
  SquareParking,
  Gift,
  Smartphone,
  Wallet,
  Bus,
} from "lucide-react";
function ServiceItems() {
  return (
    <div className={styles.serviceItemsWrapper}>
      <h1 className={styles.mainHeading}>Services</h1>
      <ul className={styles.serviceGrid}>
        <ServiceItem
          href="/"
          icon={Cross}
          title={"Travel Care 24/7"}
          text={"24/7 Support from the Moment You Book Your Trip"}
        />
        <ServiceItem
          href="/"
          icon={Shield}
          title={"Insurance"}
          text={
            "Choose the optimal package for yourself and your loved ones. Go on vacation and leave your worries behind."
          }
        />
        <ServiceItem
          href="/"
          icon={Earth}
          title={"Optional trips"}
          text={
            "Discover the world with us. Book optional excursions to make the most of your holiday."
          }
        />
        <ServiceItem
          href="/"
          icon={Car}
          title={"Car rental"}
          text={
            "Want to explore the area on your own? Rent a car and hit the road."
          }
        />
        <ServiceItem
          href="/"
          icon={Hotel}
          title={"Individual transfers"}
          text={
            "The perfect solution if you want direct transfer from the airport straight to your hotel."
          }
        />
        <ServiceItem
          href="/"
          icon={SquareParking}
          title={"Airport parking"}
          text={
            "Going on vacation and want a comfortable ride to the airport? Book parking."
          }
        />
        <ServiceItem
          href="/"
          icon={Gift}
          title={"Gift cards"}
          text={
            "A gift for any occasion. Gift cards for an exceptional vacation."
          }
        />
        <ServiceItem
          href="/"
          icon={Smartphone}
          title={"eSIM cards"}
          text={"Stay connected wherever you go with an eSIM card from Airalo."}
        />
        <ServiceItem
          href="/"
          icon={Wallet}
          title={"Deferred payments"}
          text={
            "Take advantage of deferred payments and pay for your trip up to 30 days after placing your order."
          }
        />
        <ServiceItem
          href="/"
          icon={Bus}
          title={"Group travel"}
          text={
            "Organizing a trip for a group? Contact us, and we will prepare a suitable offer."
          }
        />
      </ul>
    </div>
  );
}

export default ServiceItems;
