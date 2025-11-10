import localFont from "next/font/local";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts//PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

const rokafSans = localFont({
  src: "./fonts/ROKAFSansBold.woff2",
  variable: "--font-rokaf-sans",
});

export const metadata = {
  title: "판다마켓",
  description: "중고 거래 웹 사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} ${rokafSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
