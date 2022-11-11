import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartbutton.module.css";
const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>4</span>
    </button>
  );
};

export default HeaderCartButton;
