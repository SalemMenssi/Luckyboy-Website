import { useEffect } from "react";
import Break from "./components/Break/Break";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GallerySection from "./components/Gallery/GallerySection";
import GetApp from "./components/GetApp/GetApp";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Attach the scroll-to-top function to the "beforeunload" event
    window.addEventListener("beforeunload", handleScrollToTop);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleScrollToTop);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      {/* <ScrollAnimation animateOnce animateIn="zoomInDown">
        <h2 id="about">About Us</h2>
        <p
          style={{
            textAlign: "center",
            padding: "0em 10em",
            marginBottom: "7em",
          }}
        >
          Welcome to our kayak and paddle rental shop, where we offer you the
          chance to discover the beauty of nature in a whole new way. Our
          high-quality kayaks and paddles are perfect for a fun and exciting
          adventure on the water.
        </p>
      </ScrollAnimation> */}
      <Features />
      <ScrollAnimation animateOnce animateIn="bounceInRight">
        <Break />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="bounceInLeft">
        <Products />
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="bounceInRight">
        <Services />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <GallerySection />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <GetApp />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}

export default App;
