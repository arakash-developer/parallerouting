import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

