import fs from 'fs';

export interface saveFileUseCase{
    execute: (options: Options) => boolean;
}

export interface Options{
    fileContent      : string;
    fileDestination? : string;
    fileName?        : string;
}

export class SaveFile implements saveFileUseCase{

    constructor(){

    }

    execute ({fileContent, fileDestination = 'Output/fichero/archivosTxt',fileName = 'table'}: Options) : boolean {

        try {

        // Creando carpeta
          fs.mkdirSync(fileDestination, {recursive: true});
        
          // Guardando fichero
          fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
        

          return true;
            
        } catch (error) {
            console.error (error);
            return false;
        }

    }
}