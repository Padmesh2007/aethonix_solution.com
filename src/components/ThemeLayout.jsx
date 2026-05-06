import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ThemeLayout({ children }) {

  return (

    <div className="theme-wrapper">

      <Navbar />

      <div className="theme-background">


        <main className="theme-content">

          {children}

        </main>

      </div>

      <Footer />

    </div>

  );

}