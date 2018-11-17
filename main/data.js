window.onload = () => {
    setTimeout(() => {
        contentSplash.classList.add('hiden');
        contentMain.classList.remove('hiden');

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

filterRestaurant = (jsonRestaurant, filterNameRestaurant) => {
    let arrRestaurant = [];

    for (const key in jsonRestaurant) {
        let restaurant = jsonRestaurant[key];

        if (restaurant.name.toLowerCase().includes(filterNameRestaurant))
            arrRestaurant.push(restaurant);
    }
    showRestaurant(arrRestaurant);
}

showForType = (jsonRestaurant, optionFood) => {
    let arrRestaurant = [];

    for (const key in jsonRestaurant) {
        let restaurant = jsonRestaurant[key];

        if (restaurant.foodType.toLowerCase().includes(optionFood))
            arrRestaurant.push(restaurant);
    }
    showRestaurant(arrRestaurant);

}

showForZone = (jsonRestaurant, zone) => {
    console.log(zone);
    let arrRestaurant = [];

    for (const key in jsonRestaurant) {
        let restaurant = jsonRestaurant[key];

        if (restaurant.location.toLowerCase().includes(zone))
            arrRestaurant.push(restaurant);
    }
    showRestaurant(arrRestaurant);

}