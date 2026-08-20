import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adobe Stock Tracker',
  description: 'Track Adobe Stock prices and trends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
