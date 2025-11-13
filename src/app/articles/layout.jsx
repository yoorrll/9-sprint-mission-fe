import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function ArticlesLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
