import Meta from "../components/meta";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-full flex flex-col items-stretch">
        <Header />
        <main className="flex-grow bg-gray-50 md:py-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}
