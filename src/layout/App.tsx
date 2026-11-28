// Importación del Provider de Redux.
import { AppRouter } from "../router/AppRouter";


function App() {
  return (
    <main className="min-h-screen w-full py-4 movil:px-2 desktop:px-7">
      <AppRouter />
    </main>
  );
}

export default App;
