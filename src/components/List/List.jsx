import React from "react";
import styles from "./List.module.css";
import { Link } from "react-router-dom";

function List({ heading, list }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className={styles.list}>
      <h2>{heading}</h2>
      <ul>
        {list.map(({ listItem, url }, key) => {
          return (
            <li key={key}>
              <Link to={url}>{listItem}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
