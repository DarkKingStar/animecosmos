import { ANIME } from "darkconsumet";

const Anime = new ANIME();
export default {
  // most-popular
  mostPopular: async (page) => {
    return await Anime.fetchMostPopular(page);
  },
  // dubbed-anime
  dubbedAnime: async (page) => {
    return await Anime.fetchDubbedAnime(page);
  },
  // latest-completed
  latestCompleted: async (page) => {
    return await Anime.fetchLatestCompleted(page);
  },
  // most-favorite
  mostFavorite: async (page) => {
    return await Anime.fetchMostFavorite(page);
  },
  // anime-movies
  animeMovies: async (page) => {
    return await Anime.fetchMovie(page);
  },
  // ona
  animeONA: async (page) => {
    return await Anime.fetchONA(page);
  },
  // ova
  animeOVA: async (page) => {
    return await Anime.fetchOVA(page);
  },
  // recently-added
  recentlyAdded: async (page) => {
    return await Anime.fetchRecentlyAdded(page);
  },
  // recently-updated
  recentlyUpdated: async (page) => {
    return await Anime.fetchRecentlyUpdated(page);
  },
  // special
  special: async (page) => {
    return await Anime.fetchSpecial(page);
  },
  // subbed-anime
  subbedAnime: async (page) => {
    return await Anime.fetchSubbedAnime(page);
  },
  // top-airing
  topAiring: async (page) => {
    return await Anime.fetchTopAiring(page);
  },
  // top-upcoming
  topUpcoming: async (page) => {
    return await Anime.fetchTopUpcoming(page);
  },
  // tv
  AnimeTv: async (page) => {
    return await Anime.fetchTV(page);
  },

  // spotlight
  spotlight: async () => {
    return await Anime.fetchSpotlight();
  },

  // search
  search: async (query, page) => {
    return await Anime.search(query, page);
  },
  // schedule
  schedule: async (date) => {
    return await Anime.fetchSchedule(date); // YYYY-MM-DD
  },
  // search-suggestions
  searchSuggestions: async (query, page) => {
    return await Anime.fetchSearchSuggestions(query, page);
  },
  // info
  fetchAnimeInfo: async (id) => {
    return await Anime.fetchAnimeInfo(id);
  },
  // episode-source
  episodeSource: async (id) => {
    return await Anime.fetchEpisodeSources(id);
  },
  // genres
  genresList: async () => {
    return await Anime.fetchGenres();
  },
  // genres/:type
  genreSearch: async (type, page) => {
    return await Anime.genreSearch(type, page);
  },

  // info
  animeInfo: async (id) => {
    return await Anime.fetchAnimeInfo(id);
  },

  // watch
  episodeSource: async (id) => {
    return await Anime.fetchEpisodeSources(id);
  },
};
