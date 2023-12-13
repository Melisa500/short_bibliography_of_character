const mars = document.querySelector('.mars');
const venus = document.querySelector('.venus');
const moon = document.querySelector('.moon');
const mercury = document.querySelector('.mercury');
const jupiter = document.querySelector('.jupiter'); 


//funcion constructora 
function SailorMoon(name, superheroname, superpower){
    this.name = name
    this.superheroname = superheroname
    this.superpower = superpower
    this.isLeader = false

    //creamos el método para que llame la información
    this.displayInfo = function () {
        const dataPersonaje = document.querySelector('article');
        const dataver = document.createElement('p')
        dataver.innerText = `Sailor Moon Information:
        Name : ${this.name}
        Superhero Name : ${this.superheroname}
        Superpower : ${this.superpower}  
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}    
    `
    dataPersonaje.appendChild(dataver)
    }

    //metodo para asignar una lider
this.becomeLeader = function () {
    this.isLeader = true
    console.log(`${this.name} has become the leader of the Sailor Moon!`)
}

}

const sailorMars = new SailorMoon('Rei Hino', 'Sailor Mars', 'Fire Soul', false);
const sailorVenus = new SailorMoon('Mina Aino', 'Sailor Venus', 'Venus Love-Me Chain', false);
const sailorMoon = new SailorMoon('Serena Tsukino', 'Sailor Moon', 'Moon Tiara Action', true);
const sailorMercury = new SailorMoon('Amy Mizuno', 'Sailor Mercury', 'Shabon Spray ', false);
const sailorJupiter = new SailorMoon('Lita Kino', 'Sailor Jupiter', 'Supreme Thunder', false);

//Llamamos el metodo para ver la información

sailorMoon.becomeLeader()

/* sailorMars.displayInfo()
sailorVenus.displayInfo()
sailorMoon.displayInfo()
sailorMercury.displayInfo()
sailorJupiter.displayInfo() */

mars.addEventListener('click', showDataMars);
venus.addEventListener('click', showDataVenus);
moon.addEventListener('click', showDataMoon);
mercury.addEventListener('click', showDataMercury);
jupiter.addEventListener('click', showDataJupiter);

function showDataMars (){
    clearInfo() 
    sailorMars.displayInfo()
}

function showDataVenus () {
    clearInfo() 
    sailorVenus.displayInfo()
}

function showDataMoon () {
    clearInfo() 
    sailorMoon.displayInfo()
}

function showDataMercury () {
    clearInfo() 
    sailorMercury.displayInfo()
}

function showDataJupiter () {
    clearInfo() 
    sailorJupiter.displayInfo()
}

function clearInfo() {
    const dataPersonaje = document.querySelector('article');
    dataPersonaje.innerHTML = '';
}