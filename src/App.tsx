import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full pb-12">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

export default App;