// Importación del Provider de Redux.
import { AppRouter } from "../router/AppRouter";
import Nav from "../components/nav/Nav";

function App() {
  return (
    <section className="min-h-screen w-full py-4 movil:px-2 desktop:px-7">
      <Nav />
      <AppRouter />
    </section>
  );
}

export default App;
