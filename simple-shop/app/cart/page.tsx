'use client';

import { useCart } from '../../context/CartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h2 className="cart-title">장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price} 원</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>
            장바구니 비우기
          </button>
        </div>
      )}
      <Link href="/">
        <button className="continue-shopping-btn">쇼핑 계속하기</button>
      </Link>
    </div>
  );
};

export default CartPage;
