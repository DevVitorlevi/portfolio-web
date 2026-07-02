import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
      </main>
    </>
  );
}

export default App;
