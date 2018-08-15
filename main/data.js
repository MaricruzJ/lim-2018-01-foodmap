window.onload = () => {
    console.log('hola!');
    setTimeout(() => {
        contentSplash.classList.add('hiden');
        contentStart.classList.remove('hiden');
    }, 1000)
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
    console.log(objectRestaurant);

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