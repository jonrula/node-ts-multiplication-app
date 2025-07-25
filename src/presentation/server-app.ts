import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base            : number;
    limit           : number;
    show            : boolean;
    fileDestination : string;
    fileName        : string;
}

export class ServerApp {

   static run({base, limit, show, fileDestination, fileName}:RunOptions){
        console.log("Server running ...");
        const table = new CreateTable().execute({base, limit, fileName: 'tabla'});
        const wasCreated = new SaveFile().execute({fileContent : table, fileDestination : fileDestination, fileName: fileName});

        if(show){} console.log(table);

        (wasCreated)? console.log(`Guardado con exito`): console.error("Error, fichero no creado");
    }
}