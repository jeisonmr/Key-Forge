import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../views/home";
import KeyForge from "../views/KeyForge";
import Guide from "../views/Guide";
import NotFound from "../views/NotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<KeyForge />} />
          <Route path="guia-de-seguridad" element={<Guide />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
