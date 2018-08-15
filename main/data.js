window.onload = () => {
    console.log('hola!');
    setTimeout(() => {
        contentSplash.classList.add('hiden');
        contentStart.classList.remove('hiden');
    }, 2000)
};

getJson = (url, callback) => {

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            callback(myJson);
        });
}

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

filterRestaurant = (objectRestaurant, filterNameRestaurant) => {
    console.log(objectRestaurant.name);
    let result = objectRestaurant.filter(restaurant => (restaurant.name.includes(filterNameRestaurant.toUpperCase())));
    console.log(result);
    return result;
}