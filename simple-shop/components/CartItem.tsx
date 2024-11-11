// components/CartItem.tsx

'use client'; // 클라이언트 컴포넌트임을 명시

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItemProps {
  item: Product;
  removeFromCart: (id: number) => void;
}

const CartItem = ({ item, removeFromCart }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>삭제</button>
    </div>
  );
};

export default CartItem;
