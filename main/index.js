const contentSplash = document.getElementById('content-splash');
const contentMain = document.getElementById('content-main');

const selectCity = document.getElementById('select-city');
const textSearch = document.getElementById('text-search');
const italianFood = document.getElementById('italian-food');
const japanesseFood = document.getElementById('japanesse-food');
const peruvianFood = document.getElementById('peruvian-food');
const allFood = document.getElementById('all-food');

const listFiltered = document.getElementById('list-filtered');

const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLocation = document.getElementById('modal-location');
const modalDirection = document.getElementById('modal-direction');
const modalReference = document.getElementById('modal-reference');
const modalPhone = document.getElementById('modal-phone');
const modalState = document.getElementById('modal-state');

let optionFood;

getJson('../data/zone.json', (jsonZone) => {

    for (const keyZone in jsonZone) {
        const objectZone = jsonZone[keyZone];

        let optionZone = document.createElement('option');
        optionZone.setAttribute('value', objectZone.name);
        let optionZoneText = document.createTextNode(objectZone.name);

        optionZone.appendChild(optionZoneText);
        selectCity.appendChild(optionZone);
    }

    getJson('../data/data.json', (jsonRestaurant) => {
        showRestaurant(jsonRestaurant);

        textSearch.addEventListener('keyup', () => {
            listFiltered.innerHTML = '';
            allFood.className = 'active';
            italianFood.classList.remove('active');
            japanesseFood.classList.remove('active');
            peruvianFood.classList.remove('active');
            filterRestaurant(jsonRestaurant, textSearch.value.toLowerCase());
        });

        allFood.addEventListener('click', () => {
            selectCity.value = '-1';
            allFood.className = 'active';
            italianFood.classList.remove('active');
            japanesseFood.classList.remove('active');
            peruvianFood.classList.remove('active');
            textSearch.value = '';
            listFiltered.innerHTML = '';
            showRestaurant(jsonRestaurant);
        })

        italianFood.addEventListener('click', () => {
            selectCity.value = '-1';
            italianFood.className = 'active';
            allFood.classList.remove('active');
            japanesseFood.classList.remove('active');
            peruvianFood.classList.remove('active');
            textSearch.value = '';
            listFiltered.innerHTML = '';
            optionFood = 'Italiana';
            showForType(jsonRestaurant, optionFood.toLowerCase());
        })

        japanesseFood.addEventListener('click', () => {
            selectCity.value = '-1';
            japanesseFood.className = 'active';
            allFood.classList.remove('active');
            peruvianFood.classList.remove('active');
            italianFood.classList.remove('active');
            textSearch.value = '';
            listFiltered.innerHTML = '';
            optionFood = 'Japonesa';
            showForType(jsonRestaurant, optionFood.toLowerCase());
        })

        peruvianFood.addEventListener('click', () => {
            selectCity.value = '-1';
            peruvianFood.className = 'active';
            allFood.classList.remove('active');
            italianFood.classList.remove('active');
            japanesseFood.classList.remove('active');
            textSearch.value = '';
            listFiltered.innerHTML = '';
            optionFood = 'Peruana';
            showForType(jsonRestaurant, optionFood.toLowerCase());
        })

        selectCity.addEventListener('change', () => {
            if (selectCity.value !== '-1') {
                listFiltered.innerHTML = '';
                showForZone(jsonRestaurant, selectCity.value.toLowerCase());
            }
        })
    })
})

showRestaurant = (jsonRestaurant) => {

    if (jsonRestaurant.length === 0) {
        listFiltered.innerHTML = '- No hay resultados -';
    } else {
        for (const key in jsonRestaurant) {

            const objectRestaurant = jsonRestaurant[key];

            let cardRestaurant = document.createElement('div');
            cardRestaurant.setAttribute('class', 'item-filtered col-sm-3');
            cardRestaurant.setAttribute('data-toggle', 'modal');
            cardRestaurant.setAttribute('data-target', '#myModal');

            let inputRestaurant = document.createElement('button');
            inputRestaurant.setAttribute('class', 'photo-restaurant');
            inputRestaurant.classList.add('img-responsive');
            inputRestaurant.style.backgroundImage = "url('" + objectRestaurant.photo + "')";

            let nameRestaurant = document.createElement('p');
            nameRestaurant.style.fontWeight = 'bold';
            let textName = document.createTextNode(objectRestaurant.name);

            nameRestaurant.appendChild(textName);
            cardRestaurant.appendChild(inputRestaurant);
            cardRestaurant.appendChild(nameRestaurant);

            listFiltered.appendChild(cardRestaurant);

            cardRestaurant.addEventListener('click', () => {
                modalTitle.innerHTML = objectRestaurant.name;
                modalTitle.style.fontWeight = 'bold';
                modalDescription.innerHTML = objectRestaurant.description;
                modalLocation.innerHTML = 'Ubicación: ' + objectRestaurant.location;
                modalDirection.innerHTML = 'Dirección: ' + objectRestaurant.direction;
                modalReference.innerHTML = 'Referencia: ' + objectRestaurant.reference;
                modalPhone.innerHTML = 'Teléfono: ' + objectRestaurant.phone;
                modalState.innerHTML = 'Estado: ' + objectRestaurant.state;
            })
        }
    }
}

