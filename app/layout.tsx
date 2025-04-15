import { Montserrat } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
        style={{ fontFamily: "'Arial', sans-serif" }} // Arialni qo'shish
        suppressHydrationWarning
      >
        {children}
      </body>
        <GoogleTagManager gtmId="G-GH8NCEDTX5" />
    </html>
  );
}
