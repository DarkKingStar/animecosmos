import { ANIME, StreamingServers } from "darkconsumet";


async function main() {
    const anime = new ANIME.Zoro();
    const search = await anime.search('one piece');
    const info = await anime.fetchAnimeInfo(search.results[0].id);
    const sources = await anime.fetchEpisodeSources(info.episodes[0].id);
    console.log(sources.sources[0].url);
}

main();