import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

export default function LayoutWithHeaderAndFooter({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="min-h-screen">{children}</div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
