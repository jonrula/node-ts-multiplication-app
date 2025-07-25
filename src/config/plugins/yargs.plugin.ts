
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.option('b',
    {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication base table'
    })
.option('l',
    {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
    })
.option('s',
    {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
    })
.option('n',
    {
    alias: 'name',
    type: 'string',
    default: 'multiplication_table',
    describe: 'File name'
    })
.option('d',
    {
    alias: 'destination',
    type: 'string',
    default: 'Output/fichero/archivosTxt',
    describe: 'File destination'
    })
.check((argv, options) => {
   if(argv.b < 1){
    throw new Error (`Base debe ser mayor que 0 (base=${argv.b})`)
   }
   return true
})
.parseSync();