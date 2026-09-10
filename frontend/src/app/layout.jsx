import "./globals.css";
import GlobalScripts from "@/components/GlobalScripts";


export const metadata = {
  title: "Muhammed Abdulla | Performance Marketer in Kerala",
  description: "I help brands grow beyond borders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
        />
        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/style.css?v=50" />
        <link rel="stylesheet" href="/assets/css/drift-wall.css?v=46" />
        <link rel="stylesheet" href="/assets/css/global-scroll.css" />
        <link rel="stylesheet" href="/assets/css/scroll-reel.css" />
      </head>
      <body>
        {children}
        <GlobalScripts />
      </body>
    </html>
  );
}
