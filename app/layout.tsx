import type { Metadata } from "next";
import { Unbounded, Nunito } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const unbounded = Unbounded({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "700",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Fatimah Hostel — Pulau Tuba",
  description: "A simple, welcoming hostel on Pulau Tuba, Malaysia. 30RM a night.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${nunito.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
