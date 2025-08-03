import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./components/AppLayout";
import Skills from "./pages/Skill/Skills";
import MyCV from "./pages/MyCV/MyCV";
import About from "./pages/About/About";
import Project from "./pages/Projecto/Project";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Homepage />}>
          <Route index element={<Project />} />
          <Route path="skills" element={<Skills />} />
          <Route path="mycv" element={<MyCV />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
