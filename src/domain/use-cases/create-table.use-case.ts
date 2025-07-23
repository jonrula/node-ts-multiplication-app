
export interface CreateTableUseCase{
    execute: (options: CreateTableOptions) => String;
}

export interface CreateTableOptions{
    base: number;
    limit?: number;
    fileName?: string;
    fileDestination?: string;
}

export class CreateTable implements CreateTableUseCase{

    constructor(
        /*
        ** Dependency injection
        */
    ){}

    execute({base, limit=10, fileName= 'table', fileDestination = 'Output/fichero/archivos2Txt'}: CreateTableOptions){

    let resultado = "";

    for (let i = 1; i <= limit; i++) {
        resultado += (`${base} × ${i} = ${i * base}\n`);
    }

    return resultado;
    }

}