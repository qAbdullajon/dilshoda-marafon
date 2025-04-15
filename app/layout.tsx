import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script"; 

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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GH8NCEDTX5"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GH8NCEDTX5');
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        style={{ fontFamily: "'Arial', sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
