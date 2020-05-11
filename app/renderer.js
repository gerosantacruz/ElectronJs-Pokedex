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
    getStats(data);
}



function getAbility(data){
    //let elemt = pokeSection;
    var addAbility = document.getElementById('record');
    var pokeAbility = document.createElement('div');


    pokeAbility.setAttribute("id", 'pokemonAby');

    pokeAbility.innerHTML += `<h3>Abilities: </h3>`
    data.abilities.forEach(element => {
        pokeAbility.innerHTML += `
            <h4> ${element.ability.name}</h4>
        `
    });

    addAbility.append(pokeAbility)
}

function getType(data){
    const addType = document.getElementById('record');
    const pokeType = document.createElement('div');
    
    pokeType.setAttribute("id", 'pokemonType');

    pokeType.innerHTML += `<h3>Type: </h3>`;
    data.types.forEach( element => {
        pokeType.innerHTML += `<h4>${element.type.name}</h4>`;
    });

    addType.append(pokeType);

}

function getStats(data){
    const addStats = document.getElementById('record');
    const pokeStat = document.createElement('table');

    pokeStat.setAttribute('id','stats');

    pokeStat.innerHTML += `
    <h3>Base Stats</h3>
    <tr>
    <th>Name</th>
    <th>Base</th>
    </tr>`;

    pokeStat.innerHTML += '<tr>';
    data.stats.forEach( e =>{
        pokeStat.innerHTML += `<td>${e.stat.name}</td>
        <td>${e.base_stat}</td>
        `
    });
    
    pokeStat.innerHTML += '</tr>';


    addStats.append(pokeStat);
}

function showError(){
    checkRecord();
    let elemt = pokeSection;
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "error");
    

    newDiv.innerHTML = `<h3>Pokemon not found</h3>`;

    elemt.append(newDiv);
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
