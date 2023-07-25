import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductGallery from "./pages/ProductGallery";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Provider store={store}>
        {" "}
        {/**Needed for Redux maximize the Auto fill**/}
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <>
                  <Checkout />
                  <ProductGallery />
                </>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
