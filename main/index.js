const contentSplash = document.getElementById('content-splash');
const contentStart = document.getElementById('content-start');
const contentMain = document.getElementById('content-main');

const selectCity = document.getElementById('select-city');
const btnSearchRestaurant = document.getElementById('btn-search-restaurant');

const filterNameRestaurant = document.getElementById('filter-name-restaurant');
const italianFood = document.getElementById('italian-food');
const japanesseFood = document.getElementById('japanesse-food');
const peruvianFood = document.getElementById('peruvian-food');

const listFiltered = document.getElementById('list-filtered');


getJson('../data/zone.json', (jsonZone) => {

    for (const keyZone in jsonZone) {
        if (jsonZone.hasOwnProperty(keyZone)) {
            const objectZone = jsonZone[keyZone];

            let optionZone = document.createElement('option');
            optionZone.setAttribute('value', objectZone.name);
            let optionZoneText = document.createTextNode(objectZone.name);

            optionZone.appendChild(optionZoneText);
            selectCity.appendChild(optionZone);
        }
    }

    btnSearchRestaurant.addEventListener('click', () => {
        contentSplash.classList.add('hiden');
        contentStart.classList.add('hiden');
        contentMain.classList.remove('hiden');

        getJson('../data/data.json', (jsonRestaurant) => {

            for (const keyRestaurant in jsonRestaurant) {

                const restaurant = jsonRestaurant[keyRestaurant];
                 showRestaurantInZone(restaurant);

                filterNameRestaurant.addEventListener('keyup', () => {

                    let filterResult = filterRestaurant(jsonRestaurant, filterNameRestaurant.value);
                    console.log(filterResult);
                });

                italianFood.addEventListener('click', () => {
                    listFiltered.innerHTML = '';
                    showRestaurantItalian(restaurant);
                })

                japanesseFood.addEventListener('click', () => {
                    listFiltered.innerHTML = '';
                    showRestaurantJapanesse(restaurant);
                })

                peruvianFood.addEventListener('click', () => {
                    listFiltered.innerHTML = '';
                    showRestaurantPeruvian(restaurant);
                })
            }
        })
    });
})

selectCity.addEventListener('change', () => {
    console.log(selectCity.value);
});


showRestaurantInZone = (objectRestaurant) => {

    let cardRestaurant = document.createElement('div');
    cardRestaurant.setAttribute('class', 'filtered');

    let inputRestaurant = document.createElement('button');
    inputRestaurant.setAttribute('class', 'restaurante-filtered');
    inputRestaurant.style.backgroundImage = "url('" + objectRestaurant.photo + "')";
    inputRestaurant.style.backgroundSize = "200px";

    let nameRestaurant = document.createElement('p');
    let textName = document.createTextNode(objectRestaurant.name);

    cardRestaurant.appendChild(inputRestaurant);
    nameRestaurant.appendChild(textName);
    cardRestaurant.appendChild(nameRestaurant);

    listFiltered.appendChild(cardRestaurant);
}


showRestaurantItalian = (objectRestaurant) => {

    if (objectRestaurant.foodType === 'Comida Italiana') {
        let cardRestaurant = document.createElement('div');
        cardRestaurant.setAttribute('class', 'filtered');

        let inputRestaurant = document.createElement('button');
        inputRestaurant.setAttribute('class', 'restaurante-filtered');
        inputRestaurant.style.backgroundImage = "url('" + objectRestaurant.photo + "')";
        inputRestaurant.style.backgroundSize = "200px";

        let nameRestaurant = document.createElement('p');
        let textName = document.createTextNode(objectRestaurant.name);

        cardRestaurant.appendChild(inputRestaurant);
        nameRestaurant.appendChild(textName);
        cardRestaurant.appendChild(nameRestaurant);

        listFiltered.appendChild(cardRestaurant);
    }

}

showRestaurantJapanesse = (objectRestaurant) => {
  
    if (objectRestaurant.foodType === 'Comida Japonesa') {
        let cardRestaurant = document.createElement('div');
        cardRestaurant.setAttribute('class', 'filtered');

        let inputRestaurant = document.createElement('button');
        inputRestaurant.setAttribute('class', 'restaurante-filtered');
        inputRestaurant.style.backgroundImage = "url('" + objectRestaurant.photo + "')";
        inputRestaurant.style.backgroundSize = "200px";

        let nameRestaurant = document.createElement('p');
        let textName = document.createTextNode(objectRestaurant.name);

        cardRestaurant.appendChild(inputRestaurant);
        nameRestaurant.appendChild(textName);
        cardRestaurant.appendChild(nameRestaurant);

        listFiltered.appendChild(cardRestaurant);
    }

}

showRestaurantPeruvian = (objectRestaurant) => {
   
    if (objectRestaurant.foodType === 'Comida Peruana') {
        let cardRestaurant = document.createElement('div');
        cardRestaurant.setAttribute('class', 'filtered');

        let inputRestaurant = document.createElement('button');
        inputRestaurant.setAttribute('class', 'restaurante-filtered');
        inputRestaurant.style.backgroundImage = "url('" + objectRestaurant.photo + "')";
        inputRestaurant.style.backgroundSize = "200px";

        let nameRestaurant = document.createElement('p');
        let textName = document.createTextNode(objectRestaurant.name);

        cardRestaurant.appendChild(inputRestaurant);
        nameRestaurant.appendChild(textName);
        cardRestaurant.appendChild(nameRestaurant);

        listFiltered.appendChild(cardRestaurant);
    }

}