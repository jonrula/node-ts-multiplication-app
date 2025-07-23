import {yarg} from "./config/plugins/yargs.plugin";
import {ServerApp} from "./presentation/server-app";

// Importamos (desestructuramos) los valores de yarg



(async() =>
    {
    await main();
    })
();

async function main(){
 
    const{b:base,l:limit,s:show, n:fileName, d: fileDestination} = yarg;
    ServerApp.run({base,limit,show, fileName, fileDestination});

   
}
