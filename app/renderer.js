//DOM Elements

const searchSection = document.querySelector('.new-search');
const formSection = document.querySelector('.new-search-form');
const inputSection = document.querySelector('.new-pokemon');
const buttonSectio = document.querySelector('.button-submit');
const pokeSection = document.querySelector('.pokeAt');


formSection.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pokemonName = inputSection.value;
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;
    const response = await fetch(url);
    const Pokejson = await response.json();
   
    checkRecord();
    ShowPokemon(Pokejson);
    
    
});


function ShowPokemon(data){
    let elemt = pokeSection;
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "record");
    

    newDiv.innerHTML = `<h4 id="data">Pokemon: ${data.name}</h4>
    <img src=${data.sprites.front_default} alt="${data.name}">

    <p>ID: ${data.id}</p>
    <p>Weight: ${data.weight}</p>
    <p>Height: ${data.height}</p>`

    data.abilities.forEach(element => {
        console.log(element.ability.name);
    }
        )
    elemt.append(newDiv);

    getAbility(data)

}

function checkRecord(){
    var isRecord = document.getElementById('record');

    if(isRecord){
        isRecord.parentNode.removeChild(isRecord);
    }
}

function getAbility(data){
    //let elemt = pokeSection;
    var addAbility = document.getElementById('record');

    addAbility.innerHTML += `<h4>Abilities: </h4>`
    data.abilities.forEach(element => {
        addAbility.innerHTML += `
            <p> ${element.ability.name}</p>
        `

    });

    addAbility.append(addAbility)
}



