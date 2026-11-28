import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[180px] top-[160px] -z-10 size-[420px] rounded-full bg-pink/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[180px] top-[250px] -z-10 size-[420px] rounded-full bg-pink/10 blur-[100px]"
        />

        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="text-center">
            <h1 className="font-primary-900 text-txt-title0 text-pink uppercase mb-4 neon-fade-up">
              404
            </h1>
            
            <h2 className="font-secondary-600 text-txt-description2 text-white mb-2 neon-fade-up" style={{ animationDelay: '120ms' }}>
              Página no encontrada
            </h2>
            
            <p className="font-primary-300 text-txt-description3 text-white/70 max-w-md mx-auto mb-8 neon-fade-up" style={{ animationDelay: '240ms' }}>
              La página que buscas no existe o ha sido movida. 
              Por favor, verifica la URL o regresa al inicio.
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-purple text-white text-txt-description2 font-primary-900 cursor-pointer transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,148,227,0.2)] neon-fade-up"
              style={{ animationDelay: '360ms' }}
            >
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
