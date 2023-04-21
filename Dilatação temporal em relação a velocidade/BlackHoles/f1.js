//tempo
const seg=1
const min= 60*seg
const hora= 60*min
const dia= 24*hora
const semana= 7*dia
const ano= 365*dia
const década = 10*ano
const centênio = 10*década
const milênio = 10*centênio

console.log(milênio)


//tamanho e distância
const me= 1
const km= 1000*me
const cm= me/100

//massa
const kg = 1
const grama = 1/1000
const ton = 1000


const c = 299792.458 // km/s
const hDiv2p = 1.054571628*10**-34 // J/s
const G = 6.67428*10**-11 // J/s
const k = 1.380649*10**-23 // J*K**-1

const constantes = {c:{n:299792458*km/hora,wt:"Velocidade da luz"},
h:{n:1.054571628*10**-34*J/s, wt:"Constante de planck"},
G:{n:6.67428*10**-11*N*m**2/kg, wt: "Constante de Newton"}, k:1.380649*10**-23}

const constanteDePlanck = h/2*Math.PI
const velDaLuzNoVác = c
