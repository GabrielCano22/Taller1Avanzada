function formacionPadawan(nombre,planeta,edad,estatura) {
    let padawan = {"nombre":nombre,"planeta":planeta,"edad":edad,"estatura":estatura}
    dividirActividades(padawan)
}

function dividirActividades(padawan) {
    let actividad = ""
    if(padawan.edad>15){
        actividad = "Manejo de sable de Luz"
    }else{
        actividad = "Manejo de la fuerza"
    }
    return console.log("El padawan "+padawan.nombre+" según su edad, él debería aprender "+actividad)
}
formacionPadawan("Alberto","Benzema",7,239)


let rowFormacionPadawan = (nombre,planeta,edad,estatura) => {
    let padawan = {"nombre":nombre,"planeta":planeta,"edad":edad,"estatura":estatura}
    rowDividirActividades(padawan)
}
let rowDividirActividades = (padawan) => {
    let actividad = ""
    if(padawan.edad>15){
        actividad = "Manejo de sable de Luz"
    }else{
        actividad = "Manejo de la fuerza"
    }
    return console.log("El padawan "+padawan.nombre+" según su edad, él debería aprender "+actividad)
}
rowFormacionPadawan("Cristiano","Putumayo",30,310)