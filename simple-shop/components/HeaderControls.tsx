'use client';

import VoiceSearch from './VoiceSearch';
import CartButton from './CartButton';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';



export default function HeaderControls() {
  const { addToCart } = useCart();
  const handleProductFound = (product: any) => {
    console.log('Found product:', product);
  };

  const handleAddToCart = (product: any) => {
    
  
    const productToAdd: Product = {
      id: product.id || `${product.c_name}-${Date.now()}`, // 서버에서 온 id가 있으면 사용, 없으면 생성
      name: product.c_name,
      c_name: product.c_name,
      price: product.c_price,
      image: `/pic/${product.c_id}.png`,
      description: product.description || ''
    };
  
    addToCart(productToAdd);
    alert(`${product.c_name}이(가) 장바구니에 추가되었습니다.`);
  };
  
  return (
    <div className="header-controls">
      <VoiceSearch 
        onProductFound={handleProductFound} 
        onAddToCart={handleAddToCart} 
      />
      <CartButton />
    </div>
  );
}
