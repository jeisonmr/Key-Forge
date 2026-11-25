import { useState } from "react";
import { analyzePassword, type PasswordAnalysis } from "../../scripts/validator";
import { showEntropyMessage } from "../../scripts/generator";

export interface FormValidatorProps {
  setEntropyState: (analysis: PasswordAnalysis) => void;
}

const FormValidator = ({setEntropyState}: FormValidatorProps) => {

  const [message, setMessage] = useState<PasswordAnalysis>({entropy: 0, message: showEntropyMessage(0)});
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          onKeyDown={(e)=>{
            if(e.key === " "){
              e.preventDefault();
            }
          }}
          onChange={(e)=>{
            const analysis = analyzePassword(e.target.value);
            setMessage(analysis);
            setEntropyState(analysis);
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          placeholder="Ingresa tu contraseña" 
          className="px-2 py-1.5 text-white font-secondary-600 text-txt-description2 w-full relative bg-purple-night/10 border border-purple-night/30 rounded-sm"
        />
      </form>
      <p className={`${value.length > 0 ? 'text-pink' : 'text-transparent'} duration-500 font-secondary-600 text-txt-description3 py-2`}>
        Tu contraseña es {message.message.text}.
      </p>
    </div>
  )
}

export default FormValidator