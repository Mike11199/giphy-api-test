const img = document.getElementById('catgif_1');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=Y4I1yn9htIQM27xALedrV4xYazIepPqE&s=grumpy cat', {mode: 'cors'})

.then(function(response) {
    return response.json();
})

.then(function(response) {
    console.log(response);
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
})

.catch(function(err) {
    // Error :(
  });
