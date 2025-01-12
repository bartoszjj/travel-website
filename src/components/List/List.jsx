import React from "react";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

function List({ heading, list }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className={styles.list}>
      <h2>{heading}</h2>
      <ul>
        {list.map(({ listItem, url }, key) => {
          return (
            <li key={key}>
              <Link
                onClick={(event) => {
                  if (url === undefined) {
                    event.preventDefault();
                    setIsModalOpen(true);
                  }
                }}
                to={url}
              >
                {listItem}
              </Link>
            </li>
          );
        })}
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <p>Work in progress</p>
          </Modal>
        )}
      </ul>
    </div>
  );
}

export default List;
