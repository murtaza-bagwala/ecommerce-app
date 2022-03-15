import { FaShoppingCart } from 'react-icons/fa';

import styles from '../styles/Nav.module.css';
import { initiateCheckout } from '../lib/payments.solution.js'

import { useCart } from '../hooks/use-cart.js';

const Nav = () => {
    const { cartItems, subtotal } = useCart();

    function checkout() {
        initiateCheckout({
        lineItems: cartItems.map(({ id, quantity }) => {
        return {
            price: id,
            quantity
        }
        })
    })
    }  

  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        Space Jelly Shop
      </p>
      <p className={styles.navCart}>
        <button onClick={checkout}>
          <FaShoppingCart /> ${subtotal.toFixed(2)}
        </button>
      </p>
    </nav>
  )
}

export default Nav;