export interface Product {
  id: number;
  c_name: string;    // 서버에서 오는 이름 필드
  name: string;      // 표시용 이름 필드
  description: string;
  price: number;
  image: string;
}