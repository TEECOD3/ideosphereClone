import Header from "@/components/Header";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const neue = localFont({
  src: [
    {
      path: "../public/Fonts/media/font.otf",
      weight: "400",
    },
    {
      path: "../public/Fonts/media/boldfont.otf",
      weight: "900",
    },
  ],
  variable: "--font-neu",
});

export const metadata: Metadata = {
  title: "ideosphere",
  description:
    "We provide breakthrough thinking for governments, individuals and private organizations in the aspects of strategic communications",
  icons: {
    icon: "/ogimage.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${neue.className}`}>
        <main className="px-8 md:px-20">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
