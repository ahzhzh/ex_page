import { CartProvider } from '../context/CartContext';
import '../styles/globals.css';
import Link from 'next/link';
import CartButton from '../components/CartButton'; // CartButton 컴포넌트 import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          {/* 전체 레이아웃 */}
          <div className="layout">
            {/* 헤더 - 장바구니 버튼과 아이콘 */}
            <header className="header">
              <div className="container">
                <Link href="/" className="logo">
                  쇼핑몰
                </Link>
                <CartButton /> {/* 여기서 CartButton 사용 */}
              </div>
            </header>

            {/* 본문 */}
            <main className="main-content">
              {children}
            </main>
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
