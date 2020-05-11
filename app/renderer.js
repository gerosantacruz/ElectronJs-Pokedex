//DOM Elements

const searchSection = document.querySelector('.new-search');
const formSection = document.querySelector('.new-search-form');
const inputSection = document.querySelector('.new-pokemon');
const buttonSectio = document.querySelector('.button-submit');
const pokeSection = document.querySelector('.pokeAt');


formSection.addEventListener('submit', async (e) => {
    try {

    e.preventDefault();
    const pokemonName = inputSection.value;
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;
    const response = await fetch(url).catch(showError());
    const Pokejson = await response.json();

    checkRecord();
    ShowPokemon(Pokejson);
    
    } catch(e) {
        console.log(e)
    }
}) ;


function ShowPokemon(data){
    let elemt = pokeSection;
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "record");
    

    newDiv.innerHTML = `<h3 id="data">Pokemon: ${data.name}</h3>
    <img src=${data.sprites.front_default} alt="${data.name}">

    <h4>ID: ${data.id}</h4>
    <h4>Weight: ${data.weight}</h4>
    <h4>Height: ${data.height}</h4>`

    
    elemt.append(newDiv);

    getAbility(data);
    getType(data);

}

function checkRecord(){
    const isRecord = document.getElementById('record');
    const isError = document.getElementById('error');

    if(isRecord){
        isRecord.remove();
    }

    else if(isError){
        isError.remove();
    }
}

function getAbility(data){
    //let elemt = pokeSection;
    var addAbility = document.getElementById('record');

    addAbility.innerHTML += `<h3>Abilities: </h3>`
    data.abilities.forEach(element => {
        addAbility.innerHTML += `
            <h4> ${element.ability.name}</h4>
        `
    });

    addAbility.append(addAbility)
}

function getType(data){
    let  addType = document.getElementById('record');
    let poketype = document.createElement('div');
    
    poketype.setAttribute('id', 'type')

    poketype.innerHTML += `<h3>Type: </h3>`;
    data.types.forEach( element => {
        pokeType.innerHTML += `<h4>${element.type.name}</h4>`
    });

    addType.append(poketype)

}

function showError(){
    checkRecord();
    let elemt = pokeSection;
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "error");
    

    newDiv.innerHTML = `<h3>Pokemon not found</h3>`;

    elemt.append(newDiv);
}
