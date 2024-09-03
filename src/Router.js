import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { MiniGame } from "./pages/minigame/MiniGame";
import { Note } from "./pages/note/Note";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./pages/menu/Menu";
import { useColorMode } from "@chakra-ui/react";

function Router() {
  const { colorMode } = useColorMode();
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/minigame/:id"
          element={<MiniGame colorMode={colorMode} />}
        />
        <Route path="/note" element={<Note colorMode={colorMode} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
