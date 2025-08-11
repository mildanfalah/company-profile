import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";

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
        <section>
          <Product />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
