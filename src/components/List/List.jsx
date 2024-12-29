import React from "react";
import styles from "./List.module.css";

function List({ heading, list }) {
  return (
    <div className={styles.list}>
      <h2>{heading}</h2>
      <ul>
        {list.map((listItem) => {
          return <li>{listItem}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
