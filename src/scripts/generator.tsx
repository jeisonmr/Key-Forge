// Funcionalidad para copiar la contraseña generada.
export const copyPassoword = (value:string):void => {
  if(value === undefined) return
  navigator.clipboard.writeText(value);
};


// Funcionalidad generadora de contraseña.
export const passGenerator = (longitud:number, may:boolean, min:boolean, num:boolean, car:boolean):string | any => {
  try {
    if(may || min || num || car){
      const mayuscula:string = may ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
      const minuscula:string = min ? "abcdefghijklmnopqrstuvwxyz" : "";
      const numero:string = num ? "1234567890" : "";
      const caracteres:string = car ? "!@#$%^&*()_[]{}<>/?~": "";
      const diccionario:string = `${mayuscula}${minuscula}${numero}${caracteres}`;

      const valores = new Uint32Array(longitud);
      crypto.getRandomValues(valores);
      getEntropyMessage(longitud);
    
      return Array.from(valores, valor =>
        diccionario[valor % diccionario.length]
      ).join('') as string;
    }
    
  } catch (error) {
    console.log(`Debe habilitar al menos una opción para generar una contraseña. Se aconseja que sea con una longitu minma e `);
  }
}



export const getEntropyMessage = (entropia:number) => {

  console.log(entropia);
  const entropiaCalulator = (Long:number) =>{
    const h = Long * Math.log2(82);
    return h;
  }
  
  const entropy = entropiaCalulator(entropia);

  if (entropy >=32){
    return {text: "Muy Fuerte", textColor: "text-green", circleColor: "before:bg-green"};
  }
  else if (entropia >= 15) {
    return {text: "Fuerte", textColor: "text-white", circleColor: "before:bg-green"};
  }
  else if (entropia >= 10) {
    return {text: "Moderada", textColor: "text-yellow", circleColor: "before:bg-yellow"};
  }else{
    return {text: "Débil", textColor: "text-red", circleColor: "before:bg-red"};
  }
};