import fs from 'fs';
import {yarg} from "./config/plugins/yargs.plugin";


// Importamos (desestructuramos) los valores de yarg
const{b:base,l:limit,s:show} = yarg


let resultado ='';
const numero = 5;  // Número base de la tabla
const cabecera= `
==============================
        TABLA DE ${base}  
==============================\n\n`


// 1) Bucle for clásico
if(show){
  for (let i = 1; i <= limit; i++) {
    resultado += (`${base} × ${i} = ${i * base}\n`);
  }

  const salida = `Output/fichero/archivosTxt`;
  // Creando carpeta
  fs.mkdirSync(salida, {recursive: true});

  // Guardando fichero
  fs.writeFileSync(`${salida}/tabla-${base}.txt`, cabecera + resultado);

  // Confirmación creación ficher0
  console.log(`Guardado con exito fichero tabla-${base}.txt`);

}else{
   console.log(`Mo se ha Guardado el fichero tabla-${base}.txt`);
}




