import Navbar from "./components/Navbar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroPage />
        </section>

        <section id="about">
          <AboutPage />
        </section>

        <section id="experience">
          <ExperiencePage />
        </section>
        <section id="projects">
          <ProjectPage />
        </section>
      </main>
    </>
  );
}