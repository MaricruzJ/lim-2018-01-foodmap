const contentSplash = document.getElementById('content-splash');
const contentStart = document.getElementById('content-start');
const contentMain = document.getElementById('content-main');

const zoneSearch = document.getElementById('zone-search');
const selectCity = document.getElementById('select-city');
const btnSearchRestaurant = document.getElementById('btn-search-restaurant');

const filterNameRestaurant = document.getElementById('filter-name-restaurant');
const vegetarianFood = document.getElementById('vegetarian-food');
const italianFood = document.getElementById('italian-food');
const japanesseFood = document.getElementById('japanesse-food');
const peruvianFood = document.getElementById('peruvian-food');
const fastFood = document.getElementById('fast-food');
const otherFood = document.getElementById('other-food');

const listFiltered = document.getElementById('list-filtered');

zoneSearch.addEventListener('keyup', () => {
    console.log(zoneSearch.value);
});

selectCity.addEventListener('change', () => {
    console.log(selectCity.value);
});

btnSearchRestaurant.addEventListener('click', () => {
    console.log('click en botón de busqueda de restaurant');
});

filterNameRestaurant.addEventListener('keyup', () => {
    console.log(filterNameRestaurant.value);
});

filterNameRestaurant.addEventListener('keyup', () => {
    console.log(filterNameRestaurant.value);
})


getJson('../data/zone.json', (zone) => {
    console.log(zone);
    let x = Object.keys(zone);
        console.log(x);
        for (const x in zone) {
            if (zone.hasOwnProperty(x)) {
                const element = zone[x];
                console.log(element);
            }
        }
})

getJson('../data/data.json', (restaurant) => {
    console.log(restaurant);
})