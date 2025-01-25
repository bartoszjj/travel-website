import { Link } from "react-router-dom";
import { Frown } from "lucide-react";
import styles from "./NotFoundPage.module.css";
import Button from "../../components/Button/Button";
function NotFoundPage() {
  return (
    <>
      <div className={styles.errorPageWrapper}>
        <h1>404 Error - Page not found.</h1>
        <p>Make sure you entered the correct URL</p>
        <Frown size={300} color={"red"} strokeWidth={0.5}></Frown>
        <Button className={styles.button} href="/">
          RETURN HOME
        </Button>
      </div>
    </>
  );
}

export default NotFoundPage;
