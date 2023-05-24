let myButton = document.getElementById('mathis');
myButton.addEventListener('click', function(){
    let myInput = document.getElementById('ville').value
    console.log(myInput);
    const token = 'bb188aabfc7171dcf41d382144dc71103522a0deeeff18f7c58368d5ca0f6126';
    const url = 'https://api.meteo-concept.com/api/forecast/daily?token='+token+'&insee='+myInput;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Utilise les données renvoyées par l'API
        console.log(data);
        document.getElementById('tmin').innerHTML = data.forecast[0].tmin;
        document.getElementById('tmax').innerHTML = data.forecast[0].tmax;
        document.getElementById('city').innerHTML = data.city.name; 
    })
    .catch(error => {
        // Gère les erreurs en cas d'échec de la requête
        console.error('Une erreur s\'est produite:', error);
    });

})
