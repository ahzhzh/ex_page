'use client'; // 클라이언트 컴포넌트로 지정

import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/Product';

const products: Product[] = [
  {
    id: 1,
    name: '상품 1',
    description: '상품 1 설명',
    price: 100000,
    image: '/pic/1-47e254e4.png',
  },
  {
    id: 2,
    name: '상품 2',
    description: '상품 2 설명',
    price: 200000,
    image: '/pic/1-352481b5.png',
  },
  {
    id: 3,
    name: '상품 3',
    description: '상품 3 설명',
    price: 200000,
    image: '/pic/21694499_1.png',
  },
  {
    id: 4,
    name: '상품 4',
    description: '상품 4 설명',
    price: 200000,
    image: '/pic/67623665_1.png',
  }
];

const ProductPage = () => {
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
