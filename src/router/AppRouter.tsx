import { BrowserRouter, Routes, Route } from "react-router";
import KeyForge from "../views/KeyForge";
import Guide from "../views/Guide";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<KeyForge />} />
        <Route path="/guia-de-seguridad" element={<Guide />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
};
