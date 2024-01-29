import Break from "./components/Break/Break";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GallerySection from "./components/Gallery/GallerySection";
import GetApp from "./components/GetApp/GetApp";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <h2>About Us</h2>
      <p style={{ textAlign: "center", padding: "0em 10em" }}>
        Welcome to our kayak and paddle rental shop, where we offer you the
        chance to discover the beauty of nature in a whole new way. Our
        high-quality kayaks and paddles are perfect for a fun and exciting
        adventure on the water.
      </p>
      <Products />
      <Break />
      <Features />
      <Services />
      <GallerySection />
      <GetApp />
      <Footer />
    </div>
  );
}

export default App;
