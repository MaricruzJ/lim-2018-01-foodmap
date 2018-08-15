getJson = (url, callback) => {

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            callback(myJson);
        });
}