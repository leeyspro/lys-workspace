import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Data Lab',
  description: 'ADsP, SQL, AWS 학습을 위한 개인 학습 포털',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
