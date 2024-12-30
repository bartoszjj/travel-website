import React from "react";
import styles from "./List.module.css";
import { Link } from "react-router-dom";

function List({ heading, list }) {
  return (
    <div className={styles.list}>
      <h2>{heading}</h2>
      <ul>
        {list.map((listItem, key) => {
          return (
            <li key={key}>
              <Link to="/">{listItem}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
