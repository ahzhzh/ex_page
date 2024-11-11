'use client'; // 클라이언트 컴포넌트로 지정

import { useCart } from '../context/CartContext';
import Link from 'next/link';

const CartButton = () => {
  const { cartItems } = useCart();

  return (
    <Link href="/cart" className="cart-button">
      <span className="cart-icon">🛒</span>
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
    </Link>
  );
};

export default CartButton;
