import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Aakash K | Financial Analyst',
  description: 'MBA Finance | Financial Analysis, Investment Strategy & Valuation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#020617]">
      <body className={`${inter.className} bg-[#020617] text-white antialiased m-0 p-0`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
