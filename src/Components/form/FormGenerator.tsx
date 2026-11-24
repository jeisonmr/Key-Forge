import IconCopy from "@public/icons/copy.png";
import iconArrowBlack from "@public/icons/arrow_black.png";
import { useState } from "react";
import Toggle from "../switch/Switch";
import { copyPassoword, getEntropyMessage, passGenerator } from "../../scripts/generator";

export interface FormProps {
  password?: string;
  entropia?: number;
}

export const FormGenerator = ({ password, entropia }: FormProps) => {

  const [entropiaState, setEntropiaState] = useState<number>(15);
  const [passwordState, setPassword] = useState<string>('');
  const [showNotyState, setShowNoty] = useState<boolean>(false);

  const [mayusculaState, setMayusculaState] = useState<boolean>(false);
  const [minusculaState, setMinusculaState] = useState<boolean>(false);
  const [numeroState, setNumeroState] = useState<boolean>(false);
  const [caracteresState, setCaracteresState] = useState<boolean>(false);  
    
  return (
    <form 
      className="flex flex-col gap-4"
      action="#" 
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="w-full relative bg-purple-night/10 border border-purple-night/30 rounded-sm">
        <input 
          type="text" 
          className="inputPassword w-full px-2 py-1.5 rounded-sm text-white font-secondary-600 text-txt-title2"
          onChange={(e)=> setPassword(e.target.value)}
          disabled
          value={passwordState}
        />
        <button 
          className="buttonCopy p-[0.8rem] rounded-xs bg-black rotate-45 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-111 duration-200"
          onClick={(e)=>{
            if(passwordState.length > 0){
              copyPassoword(passwordState);
              setShowNoty(true);
              setTimeout(() => {
                setShowNoty(false);
              }, 2000);
            }
            e.preventDefault();
          }}
        >
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
      <div 
        className={`alertCopy absolute right-4 top-4 w-fit rounded-sm ${showNotyState ? 'flex' : 'hidden'} items-center gap-0.5 bg-purple/40 text-white text-txt-description4 font-secondary-600 p-1`} 
        role="alert"
      >
        <svg className="fill-current w-1.5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>Contraseña copiada.</p>
      </div>
    
      <div className="flex flex-col gap-1">
        <div className="max-desktop:hidden flex flex-col">
          {/* <span
            className={`relative ${entropyMessage.textColor} text-txt-description4 uppercase ml-2
                  before:content-[''] before:w-[0.8rem] before:h-[0.8rem] ${entropyMessage.circleColor} before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-[-1.5rem] before:rounded-full`}
          >
            {entropyMessage.text}
          </span> */}
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
            min="8" 
            max="45"  
            onChange={(e) => {
              setEntropiaState(Number(e.target.value))
            }}
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
            <Toggle title="Mayúsculas" setCheck={setMayusculaState} stateCheck={mayusculaState} />
            <Toggle title="Minúsculas" setCheck={setMinusculaState} stateCheck={minusculaState} />
            <Toggle title="Números" setCheck={setNumeroState} stateCheck={numeroState} />
            <Toggle title="Símbolos" setCheck={setCaracteresState} stateCheck={caracteresState} />
          </div>
        </div>

        <button 
          className="flex items-center justify-center gap-1 px-4 py-2 mt-1 rounded-md bg-purple text-white text-txt-description2 font-primary-900 cursor-pointer group"
          onClick={(e)=>{
            if(mayusculaState || minusculaState || numeroState || caracteresState){
              setPassword(passGenerator(entropiaState, mayusculaState, minusculaState, numeroState, caracteresState));
            }
            e.preventDefault();
          }}
        >
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