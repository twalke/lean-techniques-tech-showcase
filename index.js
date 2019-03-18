const rs = require("readline-sync");

const album = require("./album");

main();

async function main() {
  console.log("enter an album number between 1-100 to view ids and titles for that album. 'q' quits the program.")
  while (true) {
    let input = rs.question("photo-album ");
    if (input == "q" ) { break; }
    await album.getAlbum(input);
  }
}

module.exports = main;
