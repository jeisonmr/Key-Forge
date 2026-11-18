// Importación de componentes principales
import NavBar from "/src/Components/navbar/Navbar";
import store from "../redux/store";

// Importación del Provider de Redux.
import { Provider } from "react-redux";

import { AppRouter } from "../router/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
