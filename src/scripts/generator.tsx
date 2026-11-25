// Constantes.
// 82 caracteres en total
const mayuscula:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const minuscula:string = "abcdefghijklmnopqrstuvwxyz" ;
const numero:string = "1234567890" ;
const caracteres:string = "!@#$%^&*()_[]{}<>/?~";

// Funcionalidad para copiar la contraseña generada.
export const copyPassoword = (value:string):void => {
  if(value === undefined) return
  navigator.clipboard.writeText(value);
};


// Funcionalidad generadora de contraseña.
export const passGenerator = (longitud:number, may:boolean, min:boolean, num:boolean, car:boolean):string | any => {
  try {
    if(may || min || num || car){
      const diccionario:string = `${may ? mayuscula : ""}${min ? minuscula : ""}${num ? numero : ""}${car ? caracteres : ""}`;

      const valores = new Uint32Array(longitud);
      crypto.getRandomValues(valores);
    
      return Array.from(valores, valor =>
        diccionario[valor % diccionario.length]
      ).join('') as string;
    }
    
  } catch (error) {
    console.log(`Debe habilitar al menos una opción para generar una contraseña. Se aconseja que sea con una longitu minma e `);
  }
}


export interface EntropyMessage {
  text: string;
  textColor: string;
  circleColor: string;
  bgColor: string;
}

export const getEntropy = (length:number, characterCount:number): EntropyMessage =>{
  const entropy = length * Math.log2(characterCount);  
  return showEntropyMessage(entropy);
}


export const showEntropyMessage = (entropy:number): EntropyMessage => {
    
  if (entropy >=90){
    return {text: "Muy Fuerte", textColor: "text-green", circleColor: "before:bg-green", bgColor: "bg-green"};
  }
  else if (entropy >= 70) {
    return {text: "Fuerte", textColor: "text-green/80", circleColor: "before:bg-green", bgColor: "bg-green"};
  }
  else if (entropy >= 60) {
    return {text: "Moderada", textColor: "text-yellow", circleColor: "before:bg-yellow", bgColor: "bg-yellow"};
  }else{
    return {text: "Débil", textColor: "text-red", circleColor: "before:bg-red", bgColor: "bg-red"};
  }
};