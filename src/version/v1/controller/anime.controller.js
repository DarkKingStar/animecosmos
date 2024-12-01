
import SERVICE from "../services/anime.service.js";
export default {
    mostPopular: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.mostPopular(page);
    },
    dubbedAnime: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.dubbedAnime(page);
    },
    latestCompleted: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.latestCompleted(page);
    },
    mostFavorite: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.mostFavorite(page);
    },
    animeMovies: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.animeMovies(page);
    },
    ona: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.animeONA(page);
    },
    ova: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.animeOVA(page);
    },
    recentlyAdded: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.recentlyAdded(page);
    },
    recentlyUpdated: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.recentlyUpdated(page);
    },
    special: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.special(page);
    },
    subbedAnime: async (req, res) => {
        const { page = 1 } = req.query;
       const response = await SERVICE.subbedAnime(page);
    },
    topAiring: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.topAiring(page);
    },
    topUpcoming: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.topUpcoming(page);
    },
    tv: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.AnimeTv(page);
    }
}

