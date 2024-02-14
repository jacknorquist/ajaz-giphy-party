'use strict';


const API_KEY = '3adru9XXXZKjlPudsw2TH0GCpCjcTiVK';

/**createSearchParams: creates and returns a URLSearchParams object for a
 * GiphyParty Gif based on the form search term*/
function createSearchParams() {
  const searchTerm = $('.search-term').val();
  const parameters = new URLSearchParams({
    "q" : searchTerm,
    "api_key" : API_KEY,
  });
  return parameters;
}


/**getGiph: Takes search paramters and returns a link to an
 * image from GiphyParty based on those parameters*/
async function getGiph(parameters) {
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${parameters}`);
  const responseJson = await response.json();
  const imageNum = Math.floor(Math.random() * responseJson.data.length);
  const image = responseJson.data[imageNum].images.original.url;
  return image;
}


/**createGiph: Creates search parameters and then calls getGiph on those
 * parameters to recieve a link to an image from GiphyParty and appends that
 * to the DOM */
async function createGiph(evt) {
  evt.preventDefault();
  const parameters = createSearchParams();
  const image = await getGiph(parameters);
  $(".giphs").append(`<img src=${image}>`);
  $('#giph-search').get(0).reset();
}

//Clears all gifs from the page
$(".remove").on("click", () => {
  $(".giphs").empty();
})

//Calls createGiph on submit
$(".giph-search").on('submit', createGiph);

console.log("Let's get this party started!");