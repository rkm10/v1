import "./globals.css";
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata = {
  title: "Rajkumar Malluri",
  description: "This is my next js and react combined portfolio",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable} antialiased bg-slate-950 leading-relaxed text-slate-400 selection:bg-sky-300 selection:text-sky-900`}>
        {children}
      </body>
    </html>
  );
}

