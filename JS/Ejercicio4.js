let sablesDeLuz =[1,4,5,7,-9,11,-14,-15]

function buscarDefectuosos(array) {
    let defectuosos=0
    array.forEach(sableDeLuz => {
        if(sableDeLuz<0){
            defectuosos+=1
        }
    });
    return defectuosos
}
console.log("cantidad de sables defectuosos:" + buscarDefectuosos(sablesDeLuz))
const rowBuscarDefectuosos = (sablesDeLuz)=>{
    sablesDeLuz.forEach(sableDeLuz =>{
        let conDefectos=0
        if(sableDeLuz <0){
            conDefectos+=1
        }
    })
    return conDefectos

}
console.log("row La cantidad de sables defectuosos son: "+ rowBuscarDefectuosos(sablesDeLuz))