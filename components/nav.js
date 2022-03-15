import { FaShoppingCart } from 'react-icons/fa';

import styles from '../styles/Nav.module.css';
import Link from 'next/link';

import { useCart } from '../hooks/use-cart.js';

const Nav = () => {
    const { cartItems, subtotal } = useCart();

  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        Space Jelly Shop
      </p>
      <p className={styles.navCart}>
        <Link href="/cart">
            <a>
          <FaShoppingCart /> ${subtotal.toFixed(2)}
          </a>
        </Link>
      </p>
    </nav>
  )
}

export default Nav;