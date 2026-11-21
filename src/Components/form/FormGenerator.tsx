import IconCopy from "@public/icons/copy.png";
import iconArrowBlack from "@public/icons/arrow_black.png";
import { useState } from "react";
import Toggle from "../switch/Switch";

export interface FormProps {
  password?: string;
  entropia?: number;
}

export const FormGenerator = ({ password, entropia }: FormProps) => {

  const [entropiaState, setEntropiaState] = useState<number>(30);

  const getEntropyMessage = () => {
    if (entropiaState >= 128){
      return {text: "Muy Fuerte", textColor: "text-green", circleColor: "before:bg-green"};
    }
    else if (entropia && entropia >= 96) {
      return {text: "Fuerte", textColor: "text-white", circleColor: "before:bg-blue"};
    }
    else if (entropia && entropia >= 64) {
      return {text: "Moderada", textColor: "text-yellow", circleColor: "before:bg-yellow"};
    }
    return {text: "Débil", textColor: "text-red", circleColor: "before:bg-red"};
  };

  const entropyMessage = getEntropyMessage();

  return (
    <form 
      className="flex flex-col gap-4"
      action="#" 
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="w-full relative bg-purple-night/10 border border-purple-night/30 rounded-sm">
        <input 
          type="text" 
          className="w-full px-2 py-1.5 rounded-sm text-white font-secondary-600 text-txt-title2"
        />
        <button className="buttonCopy p-[0.8rem] rounded-xs bg-black rotate-45 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-111 duration-200">
          <img 
            src={IconCopy} 
            alt="Copiar" 
            className="w-2 h-2 -rotate-45"
            title="Copiar"
            width={16}
            height={16}
            loading="lazy"
          />
        </button>
      </div>
    
      <div className="flex flex-col gap-1">
        <div className="max-desktop:hidden flex flex-col">
          <span
            className={`relative ${entropyMessage.textColor} text-txt-description4 uppercase ml-2
                  before:content-[''] before:w-[0.8rem] before:h-[0.8rem] ${entropyMessage.circleColor} before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-[-1.5rem] before:rounded-full`}
          >
            {entropyMessage.text}
          </span>
          <hr className="my-1 border-gray/50" />
        </div>

        <div>
          <p className="text-txt-description2 text-white/70 font-primary-600">
            Longitud de la clave
          </p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <input 
            type="range" 
            min="30" 
            max="100"  
            onChange={(e) => setEntropiaState(Number(e.target.value))}
            className="w-full accent-purple-dark"
            value={entropiaState}
          />
          <span className="text-txt-description3 text-purple-100 font-secondary-600 p-1.5 rounded-md bg-purple-dark/5 border border-purple-night/28">
            {entropiaState}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-txt-description2 text-white/70 font-primary-600">
            Personaliza tu clave
          </p>
          <div className="grid grid-cols-2 w-full gap-2">
            <Toggle title="Mayúsculas" />
            <Toggle title="Minúsculas" />
            <Toggle title="Números" />
            <Toggle title="Símbolos" />
          </div>
        </div>

        <button className="flex items-center justify-center gap-1 px-4 py-2 mt-1 rounded-md bg-purple text-white text-txt-description2 font-primary-900 cursor-pointer group">
          <span>Generar contraseña</span>
          <img 
            src={iconArrowBlack} 
            alt="Flecha" 
            width={20} 
            height={20}
            className="duration-200 group-hover:rotate-45"
          />
        </button>
      </div>
    </form>
  );
};