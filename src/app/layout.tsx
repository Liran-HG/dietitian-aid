import type { Metadata } from "next";
import { Noto_Sans_Hebrew, Secular_One } from "next/font/google";
import "./globals.css";
import ClientProviders from "./Providers/ClientProviders";
import Footer from "./components/Footer";
import CurrentMeeting from "./components/Meetings/CurrentMeeting";

const noto = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  variable: "--font-noto",
});
const specular = Secular_One({
  subsets: ["hebrew"],
  variable: "--font-secular",
  weight: "400",
});
export const metadata: Metadata = {
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <ClientProviders>
        <body className={""}>
          <CurrentMeeting />
          {children}
          <Footer />
        </body>
      </ClientProviders>
    </html>
  );
}
