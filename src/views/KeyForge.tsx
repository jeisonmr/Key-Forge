import IconShield from "@public/icons/shield.png";
import IconPassword from "@public/icons/password.png";
import BoxInformation from "../components/box/BoxInformation";
import { FormGenerator } from "../components/form/FormGenerator.tsx";
import FormValidator from "../components/form/FormValidator.tsx";
import { useState } from "react";
import { type PasswordAnalysis } from "../scripts/validator";
import { showEntropyMessage } from "../scripts/generator";

const KeyForge = () => {

  const [entropyState, setEntropyState] = useState<PasswordAnalysis>({entropy: 0, message: showEntropyMessage(70)});

  return (
    <div className="flex flex-col gap-2">
      <header className="w-full h-full flex justify-between py-3">
        <div className="flex flex-col gap-5 justify-between">
          <h5 className="text-txt-description4 font-secondary-300 uppercase text-pink">
            Generador y validador de contraseñas <span className="mx-1">/</span> V 2.0
          </h5>

          <h1 className="text-white font-primary-900 text-txt-title0 uppercase">
            Key Forge
          </h1>

          <p className="text-txt-description3 font-primary-300 text-white/70">
            Personaliza longitud y caracteres. La clave se genera en tu dispositivo.
          </p>
        </div>
        <div className="max-desktop:hidden">
          <div className="flex items-center gap-2 py-1 px-2 rounded-md bg-purple-night/30 border border-purple-800">
            <img 
              src={IconShield} 
              alt="Privacidad total, tu clave es única." 
              className="w-3 h-3"
            />
            <p className="flex flex-col gap-0.5">
              <span className="text-txt-description3 font-secondary-600 uppercase text-purple-100">
                Privacidad Total
              </span>
              <span className="text-txt-description3 font-secondary-300 text-pink">
                Tu clave es única.
              </span>
            </p>
          </div>
        </div>
      </header>

      <main className="w-full h-full flex movil:flex-col desktop:flex-row gap-5">
        {/* Generador */}
        <div className="bg-purple-dark/40 p-2 desktop:p-4 rounded-lg flex flex-col gap-3 w-full desktop:w-[70%] relative">
          <h5 className="text-txt-description4 font-secondary-300 uppercase text-pink">
            01<span className="mx-1">/</span> Generador
          </h5>
          <FormGenerator />
        </div>

        {/* Validador */}
        <div className="w-full desktop:w-[30%] flex flex-col gap-2 bg-purple-dark/40 p-2 desktop:p-4 rounded-lg">
          <h5 className="text-txt-description4 font-secondary-300 uppercase text-pink">
            02 <span className="mx-0.5">/</span> Validador
          </h5>
          <div className="flex flex-col gap-2 justify-center items-center h-25 w-full">
            <div className={`w-10 h-10 z-10 rounded-full flex items-center justify-center relative shimmer animate-pulse`}>
              <div className={`w-full h-full absolute inset-0 ${entropyState.message.bgColor} blur-2xl rounded-full`}></div>
              <div className="bg-white/5 border border-white/10  rounded-full z-20"></div>
            </div>
          </div>

          <div className="flex flex-col gap-1 rounded-md p-2 bg-purple-night/10 border border-purple-800">
            <h2 className="text-txt-description3 font-secondary-300 text-white uppercase">
              Entropía Estimada
            </h2>
            <p className={`text-txt-title2 font-secondary-300 ${entropyState.entropy > 0 ? 'text-pink' : 'text-transparent'} duration-500`}>
              {entropyState.entropy} bits
            </p>
          </div>
          <hr className="text-gray/50" />
          <FormValidator
            setEntropyState={setEntropyState}
          />
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