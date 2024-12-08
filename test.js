import {ANIME} from "darkconsumet";

const Anime = new ANIME();

async function main() {
    let data = await Anime.search("one piece", 1);
    console.log("DATA OUT",data);
}

main();