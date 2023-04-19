const velObj=1
const fDeVel="km/s"
const ondMed="f"
const TempQuePas= 30
const MedDoTempQuePas="minutos"

function resumo(VO,FdV,OM,TqP,MdTqP){
    return(DifTemp(DilTemp(KmsVel(VO,FdV)),OM,TqP)+` ${MdTqP}`)
}

console.log(`Se uma pessoa que estivesse ${FoD()} de um objeto á uma velocidade de ${velObj}${fDeVel} cronometrasse ${TempQuePas} ${MedDoTempQuePas}, a pessoa que estivesse ${DoF()} do objeto iria cronometrar ${resumo(velObj,fDeVel,ondMed,TempQuePas,MedDoTempQuePas)}`)









function KmsVel(v, f){
if(f=="km/s"){
return(v)
}else if(f=="m/s"){
return(v/1000)
}else if(f=="c"){
return(v*299792.458)
}else if(f=="km/h"){
return(v/3600)
}else{
    return("forma de medida não suportada")}
}

function DilTemp(v){
    return(Math.sqrt(1-(v**2/299792.458**2)))
}

function DifTemp(dil,qm,temp){
if(qm=="f"){
    return(temp/dil)
} else if(qm=="d"){
    return(temp*dil)
}else{
    return("erro")
}
}

function DoF(){
    if(ondMed=="f"){
        return("dentro")
    }else{
        return("fora")
    }
}
function FoD(){
    if(ondMed=="d"){
        return("dentro")
    }else{
        return("fora")
    }
}

