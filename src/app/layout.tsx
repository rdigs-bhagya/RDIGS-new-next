import type { ReactNode } from 'react';

import Topbar from '@/component/Topbar/page';
import Navbar from '@/component/Navbar/page';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import Footer from '@/component/Footer/page';


// Import Google Font via next/font/google
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'], // Light, Bold, Extra Bold
  display: 'swap', // Prevents FOUT (flash of unstyled text)
});

export const metadata = {
  title: 'My App',
  description: 'Using DM Sans with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Topbar />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
