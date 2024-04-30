import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Formation from "./components/Formation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#fafaf9] dark:bg-stone-900 ">
      <div className="animate-in mx-auto max-w-xs md:max-w-xl lg:max-w-4xl mb-4">
        <Header />
        <Intro />
        <Contact />
        <Skills />
        <Projects />
        <Experience />
        <Formation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
