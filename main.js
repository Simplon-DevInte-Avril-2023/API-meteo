const token = 'bb188aabfc7171dcf41d382144dc71103522a0deeeff18f7c58368d5ca0f6126';
const url = 'https://api.meteo-concept.com/api/forecast/daily?token='+token+'&insee=59350';
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Utilise les données renvoyées par l'API
    console.log(data);
  })
  .catch(error => {
    // Gère les erreurs en cas d'échec de la requête
    console.error('Une erreur s\'est produite:', error);
  });
