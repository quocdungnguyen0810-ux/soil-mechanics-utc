import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GreenPeat | AgriCoX - Giải pháp giá thể mụn dừa bền vững',
  description:
    'Website thương mại và quản trị bán hàng cho GreenPeat - AgriCoX: giới thiệu sản phẩm cocopeat growbag, nhận RFQ, quản lý khách hàng, đơn hàng và chứng từ.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
