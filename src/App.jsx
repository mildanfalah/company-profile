import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Process from "./components/Process";
import Partner from "./components/Partner";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <main>
        <section className="">
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section className="bg-[#E8F9FF]">
          <Process />
        </section>
        <section>
          <Product />
        </section>
        <section className="bg-[#E8F9FF]">
          <Partner />
        </section>
        <section>
          <Testimoni />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
