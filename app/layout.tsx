import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

const montserrat = Montserrat({
  variable: "--font-montserrat", // variable nomini moslashtirdim
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "22-23-24-Aprel | Soat 20:00",
  description: "Qanday qilib 3 kun ichida Super Rus tili metodi orqali erkin muloqotga chiqish mumkin?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz"> {/* O'zbek tilida bo'lsa, 'en'ni 'uz'ga o'zgartiring */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` 
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1088463105874255');
            fbq('track', 'PageView');
          `,
        }}
      />
      <body
        className={`${montserrat.variable} antialiased`} // CSS variable orqali fontni qo'llash
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
