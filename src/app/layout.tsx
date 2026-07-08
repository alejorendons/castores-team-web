import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamcastores.com"),
  title: {
    default: "Team Castores | Club de Natación - El Retiro, Antioquia",
    template: "%s | Team Castores",
  },
  description:
    "Club de Natación Team Castores en El Retiro, Antioquia. Natación, Carreras, Natación Subacuática y Triatlón. Más de 8 años formando campeones dentro y fuera del agua.",
  keywords: [
    "natación",
    "club de natación",
    "team castores",
    "natación El Retiro",
    "natación Antioquia",
    "triatlón",
    "natación subacuática",
    "carreras",
    "nado",
    "piscina",
    "natación infantil",
    "natación juvenil",
    "natación adultos",
    "entrenamiento acuático",
  ],
  authors: [{ name: "Team Castores" }],
  creator: "Team Castores",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://teamcastores.com",
    siteName: "Team Castores",
    title: "Team Castores | Club de Natación - El Retiro, Antioquia",
    description:
      "Club de Natación en El Retiro, Antioquia. Natación, Carreras, Natación Subacuática y Triatlón. Más de 8 años formando campeones.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Castores - Club de Natación El Retiro Antioquia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Castores | Club de Natación - El Retiro, Antioquia",
    description:
      "Club de Natación en El Retiro, Antioquia. Natación, Carreras, Natación Subacuática y Triatlón.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              name: "Team Castores",
              description:
                "Club de Natación en El Retiro, Antioquia. Natación, Carreras, Natación Subacuática y Triatlón.",
              url: "https://teamcastores.com",
              telephone: "+57 300 123 4567",
              email: "info@teamcastores.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "El Retiro",
                addressRegion: "Antioquia",
                addressCountry: "CO",
              },
              sameAs: [
                "https://facebook.com/teamcastores",
                "https://instagram.com/teamcastores",
                "https://twitter.com/teamcastores",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-secondary antialiased">
        {children}
      </body>
    </html>
  );
}
