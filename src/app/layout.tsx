import type { ReactNode } from 'react';

import Topbar from '@/component/Topbar/page';
import Navbar from '@/component/Navbar/page';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import Footer from '@/component/Footer/page';


// Import Google Font via next/font/google
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'RDIGS',
  description: 'RDIGS Digital Marketing & Demand Generation Services',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className={`${dmSans.className} ${dmSans.variable}`}>
        <Topbar />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
