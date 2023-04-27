import Break from "./components/Break/Break";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
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
      <Features />
      <Break />
      <Products />
      <Services />
      <GetApp />
      <Footer />
    </div>
  );
}

export default App;
