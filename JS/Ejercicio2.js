let navesPilotos ={"ARQ2555": "Sara Bel-Sun","ARQ2556":"Nodin Chavdri","ARQ2557":"Fin"};

function buscarPiloto(codigoAcceso) {
    for(const [codigo,piloto] of Object.entries(navesPilotos)){
        if(codigo==codigoAcceso){
            console.log("El piloto de la nave es: "+piloto)
        }
    }
}
buscarPiloto("ARQ2557")

let rowBuscarPiloto= (codigoAcceso) => {
    for(const[codigo,piloto] of Object.entries(navesPilotos)){
        if(codigo==codigoAcceso){
            console.log("Row el piloto es: "+ navesPilotos)
        }
    }
}

rowBuscarPiloto("ARQ2556")