
import SERVICE from "../services/anime.service.js";
import responseHandler from "../../../utils/responseHandler.js";
import HTTP_CODES from "../../../utils/httpCodes.js";

export default {
    mostPopular: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.mostPopular(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    dubbedAnime: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.dubbedAnime(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    latestCompleted: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.latestCompleted(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    mostFavorite: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.mostFavorite(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    animeMovies: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.animeMovies(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    ona: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.animeONA(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    ova: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.animeOVA(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    recentlyAdded: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.recentlyAdded(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    recentlyUpdated: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.recentlyUpdated(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    special: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.special(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    subbedAnime: async (req, res) => {
        const { page = 1 } = req.query;
       const response = await SERVICE.subbedAnime(page);
       try{
        responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    topAiring: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.topAiring(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    topUpcoming: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.topUpcoming(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    tv: async (req, res) => {
        const { page = 1 } = req.query;
        const response = await SERVICE.AnimeTv(page);
        try{
            responseHandler(res, true, HTTP_CODES.SUCCESS.code, HTTP_CODES.SUCCESS.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    }
}

