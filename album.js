const axios = require("axios");

class Album {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

module.exports = {
  getAlbum: async function (input) {
    let concatAlbumToUrl = "https://jsonplaceholder.typicode.com/photos?albumId=" + input;
    let request = axios.get(concatAlbumToUrl);
    await request;
    return request;
  },
  buildAlbum: async function (request) {
    let theAlbum = [];
    request.then(function(response) {
      let myAlbum = response.data;
      if (myAlbum.length == 0) {
        console.log("Sorry, no album there.");
        return;
      }
      for (let i = 0; i < myAlbum.length; i++) {
        let newId = myAlbum[i].id;
        let newTitle = myAlbum[i].title;
        let newPhoto = new Album(newId, newTitle);
        theAlbum.push(newPhoto);
      }
    })
    .catch(function(err) {
      console.log(err);
    })
    await request;
    return theAlbum;
  },
  printAlbum: function (theAlbum) {
    for (let i = 0; i < theAlbum.length; i++) {
        console.log("[" + theAlbum[i].id + "] " + theAlbum[i].title);
      }
  }
};
