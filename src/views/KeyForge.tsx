import IconShield from "@public/icons/shield.png";
import IconPassword from "@public/icons/password.png";
import BoxInformation from "../components/box/BoxInformation";
import { FormGenerator } from "../components/form/FormGenerator.tsx";
import FormValidator from "../components/form/FormValidator.tsx";

const KeyForge = () => {
  return (
    <div className="flex flex-col gap-2">
      <header className="w-full h-full flex justify-between py-3">
        <div className="flex flex-col gap-5 justify-between">
          <span className="text-txt-description4 font-secondary-300 uppercase text-blue3">
            Generador y validador de contraseñas <span className="mx-1">/</span> V 2.0
          </span>

          <h1 className="text-purple-100 font-primary-900 text-txt-title0 uppercase">Key Forge</h1>

          <p className="text-txt-description3 font-primary-300 text-purple-200">
            Personaliza longitud y caracteres. La clave se genera en tu dispositivo.
          </p>
        </div>
        <div className="max-desktop:hidden">
          <div className="flex items-center gap-2 py-1 px-2 rounded-md bg-purple-900/50 border border-purple-800">
            <img 
              src={IconShield} 
              alt="Privacidad total, tu clave es única." 
              className="w-3 h-3"
            />
            <p className="flex flex-col gap-0.5">
              <span className="text-txt-description3 font-secondary-300 uppercase text-purple-100">
                Privacidad Total
              </span>
              <span className="text-txt-description3 font-secondary-300 text-purple-200">
                Tu clave es única.
              </span>
            </p>
          </div>
        </div>
      </header>

      <main className="w-full h-full flex movil:flex-col desktop:flex-row gap-5">
        {/* Generador */}
        <div className="flex flex-col gap-3 w-full desktop:w-[70%]">
          <span className="text-txt-description4 font-secondary-300 uppercase text-purple-700">
            01<span className="mx-1">/</span> Generador
          </span>
          <FormGenerator />
        </div>

        {/* Validador */}
        <div className="w-full desktop:w-[30%] flex flex-col gap-2">
          <span className="text-txt-description4 font-secondary-300 uppercase text-purple-700">
            02 <span className="mx-0.5">/</span> Validador
          </span>
          <div className="flex flex-col gap-2 justify-center items-center h-25 w-full">
            <div className={`w-10 h-10 z-10 rounded-full flex items-center justify-center relative`}>
              <div className="w-full h-full absolute inset-0 bg-red-600 blur-2xl rounded-full"></div>
              <div className="bg-blue/80 rounded-full p-1 z-20">
                <img 
                  src={IconPassword} 
                  alt="Validador" 
                  className="w-2 h-2 object-contain"
                  title="Validador de contraseñas"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 bg-blue/10 rounded-md p-2 border border-blue2">
            <h3 className="text-txt-description4 font-secondary-300 text-purple-100/80 uppercase">
              Entripía Estimada
            </h3>
            <p className="text-txt-description4 font-secondary-300 text-purple-200/80">
              {104} bits
            </p>
          </div>
          <hr className="text-gray/50" />
          <FormValidator />
        </div>
        {/**/}
      </main>

      <footer className="grid movil:grid-cols-1 desktop:grid-cols-3 gap-2">
        <BoxInformation title="Cifrado Local" description="Nada sale de tu navegador" />
        <BoxInformation title="Sin Historial" description="Las claves no se guardan" />
        <BoxInformation title="Aleatoriedad Real" description="Entropía criptográfica" />
      </footer>
      </div>
  );
};

export default KeyForge;