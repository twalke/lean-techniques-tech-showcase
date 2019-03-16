const rs = require("readline-sync");

const album = require("./album");

main();

async function main() {
  while (true){
    let input = rs.question("photo-album ");
    if (input == "q" ){ break; }
    await album.getAlbum(input);
  }
}
