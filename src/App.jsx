import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
