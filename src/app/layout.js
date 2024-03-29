import { Epilogue } from 'next/font/google';
import './globals.css';

const epilogue = Epilogue({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} text-text-color font-medium`}>{children}</body>
    </html>
  );
}
