import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">
        <About />
      </div>
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
