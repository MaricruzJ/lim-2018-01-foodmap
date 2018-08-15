window.onload = () => {
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

filterRestaurant = (jsonRestaurant, filterNameRestaurant) => {
    
    let result = jsonRestaurant.filter(restaurant => (restaurant.name.includes(filterNameRestaurant.toUpperCase())));
    return result;
}