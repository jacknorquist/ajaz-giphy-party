'use strict';

async function getGiph(evt) {
  evt.preventDefault();
  let searchTerm = $('.search-term').val();
  let api_key = '3adru9XXXZKjlPudsw2TH0GCpCjcTiVK';
  let response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${api_key}`);
  let test = await response.json();
}


$(".giph-search").on('submit', getGiph);

console.log("Let's get this party started!");