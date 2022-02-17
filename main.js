
const img = document.getElementById('catgif_1');


//this is how to use an API with an asynchronous function, which allows us to use the 'await' keyword
//async/await are just promises written in a different way

async function getCats() {
    
    try {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=Y4I1yn9htIQM27xALedrV4xYazIepPqE&s=grumpy cat', {mode: 'cors'})
        const catData = await response.json();
        console.log(catData);
        img.src = catData.data.images.original.url;
    }

    catch (err)  {
        console.log(err);
    }
}

//then call asynchronous funciton with this.
getCats();




//this is the first way shown to use the API with promises

// fetch('https://api.giphy.com/v1/gifs/translate?api_key=Y4I1yn9htIQM27xALedrV4xYazIepPqE&s=grumpy cat', {mode: 'cors'})

// .then(function(response) {
//     return response.json();
// })

// .then(function(response) {
//     console.log(response);
//     console.log(response.data.images.original.url);
//     img.src = response.data.images.original.url;
// })

// .catch(function(err) {
//     // Error :(
//   });
