import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Process from "./components/Process";
import Partner from "./components/Partner";
import Testimoni from "./components/Testimoni";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <section className="bg-[#E8F9FF]">
          <Process />
        </section>
        <Product />
        <section className="bg-[#E8F9FF]">
          <Partner />
        </section>
        <Testimoni />
        <section className="bg-[#E8F9FF]">
          <Gallery />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
