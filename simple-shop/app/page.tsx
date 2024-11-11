'use client';

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="welcome-title">예시 쇼핑몰 사이트 입니다.</h1>
      <Link href="/product">
        <button className="shop-now-btn">쇼핑 시작하기</button>
      </Link>
    </div>
  );
};

export default HomePage;
