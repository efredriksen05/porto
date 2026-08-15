import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import Footer from "./components/Footer";
import NewProjectPage from "./pages/NewProjectPage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
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
                  <NewProjectPage />
                </section>
              </main>
            }
          />

          <Route
            path="/projects/:slug"
            element={<ProjectPage />}
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}