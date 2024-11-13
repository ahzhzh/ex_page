'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/Product';
import VoiceSearch from '../../components/VoiceSearch';

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        const data = await response.json();
        // DB 데이터와 이미지를 매핑
        const productsWithImages = data.map((item: any, index: number) => ({
          id: item.c_id,
          name: item.c_name,
          price: item.c_price,
          description: `${item.c_name} 설명`,  // 기본 설명 추가
          image: `/pic/${(index % 4) + 1}.png`  // 기존 이미지 순환 사용
        }));
        setProducts(productsWithImages);
      } catch (error) {
        console.error('상품 데이터를 불러오는데 실패했습니다:', error);
      }
    };

    fetchProducts();
  }, []);

  

  return (
    <div className="product-page">
      <h1 className="product-title">상품 목록</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
    </div>
  );
};

export default ProductPage;
