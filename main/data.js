getJson = (url, callback) => {

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            callback(myJson);
        });
}

window.onload = () => {
    console.log('hola!');
    setTimeout(() => {
        contentSplash.classList.add('hiden');
        contentStart.classList.remove('hiden');
    }, 2000)
};

