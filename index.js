const rs = require("readline-sync");
const album = require("./album");

main();

async function main() {
  console.log("Enter an album number between 1-100 to view ids and titles for that album. Entering 'q' quits the program.")
  while (true) {
    let input = rs.question("photo-album ");
    if (input == "q" ) { break; }

    let request = album.getAlbum(input);
    await request;

    let myAlbum = album.buildAlbum(request);

    myAlbum.then(function(result) {
       album.printAlbum(result);
    })
    await myAlbum;
  }
}

module.exports = main;
