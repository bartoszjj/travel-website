import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "./Destination.module.css";
import Button from "../Button/Button";
import MainContent from "../MainContent/MainContent";

function Destination() {
  const { destinationId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const destinations = [
    {
      id: "waterfall-in-the-amazon-jungle",
      imagePath: "/images/img-9.jpg",
      title: "Explore the hidden waterfall deep inside the Amazon Jungle",
      paragraph:
        "Tucked away in the heart of the Amazon Jungle lies a breathtaking hidden waterfall, a natural wonder shrouded in mystery and serenity. Surrounded by lush, emerald-green vegetation and the symphony of exotic birds and distant howler monkeys, this secluded paradise feels untouched by time. \n\n The journey to reach it is an adventure in itself, winding through narrow trails flanked by towering trees and vibrant orchids. As you approach, the sound of cascading water grows louder, culminating in the sight of a crystal-clear cascade tumbling into a pristine pool below. \n\n Bathe in its cool waters, feel the spray on your skin, and let the tranquil energy of the jungle envelop you—it’s a magical experience that captures the untamed beauty of the Amazon.",
      alt: "A man standing atop a rock in front of a waterfall in the Amazon Jungle",
    },
    {
      id: "private-cruise-in-bali",
      imagePath: "/images/img-2.jpg",
      title: "Travel through the Islands of Bali in a Private Cruise",
      paragraph:
        "Embark on an unforgettable journey through the enchanting islands of Bali aboard a private cruise, where luxury meets the raw beauty of nature. Glide across the turquoise waters of the Indian Ocean, stopping at secluded beaches, hidden lagoons, and vibrant coral reefs teeming with marine life. \n\n Each island offers its own charm—wander through the iconic rice terraces of Nusa Penida, dive into the crystal-clear waters of Menjangan Island, or soak up the sun on the white sands of Gili Trawangan. As the sun dips below the horizon, enjoy a gourmet meal prepared on board while the sky ignites with hues of orange and pink. \n\n Whether you're exploring ancient temples or simply relaxing on the deck, a private cruise through Bali’s islands is the epitome of tropical paradise.",
      alt: "Aerial view of the Islands of Bali",
    },
    {
      id: "sail-in-the-atlantic",
      imagePath: "/images/img-3.jpg",
      title: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
      paragraph:
        "Embarking on a voyage through the vast Atlantic Ocean, you’ll journey into uncharted waters where adventure and discovery await. With nothing but the endless horizon ahead, each day brings the promise of exploring the unknown—perhaps a remote island that rises like a hidden gem or rare marine wildlife that surfaces as if to greet you. \n\n Feel the invigorating ocean breeze as your vessel glides over waves, the only sound the rhythmic lapping of water against the hull. By night, marvel at the brilliance of the stars unobscured by city lights, their reflection dancing on the dark waters below. \n\n This journey into the Atlantic is not just about the destinations but the thrill of venturing into the mysterious and untamed heart of the ocean.",
      alt: "Aerial view of a boat in the ocean",
    },
    {
      id: "football-himalayan-mountains",
      imagePath: "/images/img-4.jpg",
      title: "Experience Football on Top of the Himalayan Mountains",
      paragraph:
        "Imagine playing football on a field perched high in the Himalayan Mountains, surrounded by towering snow-capped peaks and crisp, invigorating air. Here, at the roof of the world, every kick of the ball feels like a triumph against gravity, as the thin air tests your endurance and the rugged terrain challenges your skills. \n\n The backdrop is surreal—a vast panorama of jagged summits and rolling clouds that seem within reach. As you run across the grass or gravel, your laughter and cheers echo through the serene valleys below. \n\n It's more than just a game; it's a connection to nature's grandeur and a testament to the human spirit, blending sport with adventure in a truly once-in-a-lifetime setting.",
      alt: "Aerial view of a football field atop a mountain",
    },
    {
      id: "sahara-desert-camel-tour",
      imagePath: "/images/img-8.jpg",
      title: "Ride through the Sahara Desert on a guided camel tour",
      paragraph:
        "Embark on an unforgettable journey through the vast expanse of the Sahara Desert on a guided camel tour, where every moment feels like stepping into an ancient story. \n\n Mounted on the back of a gentle, sure-footed camel, you’ll traverse golden dunes that stretch endlessly to the horizon, their shifting sands glowing under the sun's rays. Your guide, a skilled nomad, shares tales of the desert's history, pointing out hidden oases and the unique flora and fauna that survive in this harsh yet captivating environment. \n\nAs the day fades, you'll set up camp beneath a blanket of stars brighter than you've ever seen, with the soft melodies of Berber songs carrying you into the night. It’s a journey of discovery, solitude, and connection to one of Earth’s most magnificent landscapes.",
      alt: "A line of camels wandering among sand dunes",
    },
  ];

  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [location]);

  React.useEffect(() => {
    function removeTabIndex() {
      if (contentRef.current) {
        contentRef.current.blur();
      }
    }

    window.addEventListener("click", removeTabIndex);

    return () => {
      window.removeEventListener("click", removeTabIndex);
    };
  }, []);

  const destination = destinations.find(
    (destination) => destination.id == destinationId
  );
  return (
    <MainContent>
      <div ref={contentRef} tabIndex="-1">
        <SectionWrapper color="secondary" className={styles.sectionSize}>
          <div className={styles.destinationWrapper}>
            <div className={styles.imageWrapper}>
              <img src={destination.imagePath} alt={destination.alt} />
              <div className={styles.gradient}></div>
              <h1 className={styles.title} tabIndex="-1">
                {destination.title}
              </h1>
            </div>
            <p className={styles.paragraph}>{destination.paragraph}</p>
            <Button onClick={() => navigate(-1)} className={styles.button}>
              GO BACK
            </Button>
          </div>
        </SectionWrapper>
      </div>
    </MainContent>
  );
}

export default Destination;
