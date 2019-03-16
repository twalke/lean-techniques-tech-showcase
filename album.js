const axios = require("axios");

module.exports = {
  getAlbum: async function (input) {
    let concatAlbumToUrl = "https://jsonplaceholder.typicode.com/photos?albumId=" + input;

    let request = axios.get(concatAlbumToUrl);
    await request;

    request.then(function(response) {
      let myAlbum = response.data;
      if (myAlbum.length == 0) {
        console.log("sorry no album there");
        return;
      }
      for (let i = 0; i < myAlbum.length; i++) {
        console.log("[" + myAlbum[i].id + "] " + myAlbum[i].title);
      }
    })
    .catch(function(err) {
      console.log(err);
    })
  }
};
