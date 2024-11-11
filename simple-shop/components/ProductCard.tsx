'use client';

import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}원</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        장바구니에 추가
      </button>
    </div>
  );
};

export default ProductCard;
