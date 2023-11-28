/* //Datos personales
const nombre = 'Melisa';
const apellido = 'Barrera';
const edad = 32;

//Hobbies
const hobbies = ['jugar', 'comer', 'limpiar'];

//Estudios

const grado = 'Especialización en Construcciones'
const universitario = 'Diseño Industrial'
const deseado = 'Artes'
const actual = 'Programación'


const frase = `Hola! 
Mi nombre es ${nombre} ${apellido}
actualmente tengo ${edad} años vividos
mis actividades son ${hobbies.join(', ')}.
`

console.log(frase) */

/* function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
    dogName: 'Coconut',
}

dogGreeting.call(newHouse);


function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Lucy';
const address = 'Av. 123';
newDogGreeting.call(newHouse, owner, address); */

/* const owner = 'Luci';
const address = 'Av. 123';

function dogGreeting (owner, address) {
    console.log(`Hola! Mi nombre es ${this.dogName} y vivo con ${owner} en ${address}`);
}

const newHouse = {
    dogName: 'Coco'
}

dogGreeting.call( newHouse, owner, address);

const valoresNecesarios = [owner, address];
dogGreeting.apply(newHouse, valoresNecesarios);

const bindingWithBind = dogGreeting.bind(newHouse, owner, address);
console.log(bindingWithBind);
bindingWithBind() */

console.log(nombreDeAlgo, mensaje());

const personalizedMessage=()=>'Goodbye everybody !'
function Rocket(name,ownMessage){this.name=name
this.launchMessage=ownMessage}
const falcon9Rocket=new Rocket('Falcon 9',personalizedMessage)
const falconHeavyRocket=new Rocket('Falcon Heavy',personalizedMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const RocketWithArrowFunction=(name,ownMessage)=>({name:name,launchMessage:ownMessage})
const personalizedMessageForArrowFunction=()=>'Successful launch !'
const falcon9Rocket1=RocketWithArrowFunction('Falcon 9',personalizedMessageForArrowFunction)
console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())
