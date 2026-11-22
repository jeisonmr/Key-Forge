// Funcionalidad para copiar la contraseña generada.
export const copyPassoword = (value:string):void => {
  if(value === undefined) return
  navigator.clipboard.writeText(value);
};


// Funcionalidad generadora de contraseña.
export const passGenerator = (longitud:number, may?:boolean, min?:boolean, num?:boolean, car?:any|boolean):string => {
  if(!may && !min && !num && !car) return;
  const mayuscula:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const minuscula:string = 'abcdefghijklmnopqrstuvwxyz';
  const numero:string = '1234567890';
  const caracteres:string | any = '@#%$&!*';
  const diccionario:string = `${may && mayuscula} ${min && minuscula} ${num && numero} ${car & caracteres}`;
  const valores = new Uint32Array(longitud);
  crypto.getRandomValues(valores);

  return Array.from(valores, valor =>
    diccionario[valor % diccionario.length]
  ).join('') as string;
}

