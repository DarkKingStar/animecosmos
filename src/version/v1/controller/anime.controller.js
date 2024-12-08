
import SERVICE from "../services/anime.service.js";

import HTTP_CODES from "../../../utils/httpCodes.js";
import responseHandler from "../../../handlers/response.handler.js";

export default {
    mostPopular: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.mostPopular(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    dubbedAnime: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.dubbedAnime(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    latestCompleted: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.latestCompleted(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    mostFavorite: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.mostFavorite(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    animeMovies: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.animeMovies(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    ona: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.animeONA(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    ova: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.animeOVA(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    recentlyAdded: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.recentlyAdded(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    recentlyUpdated: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.recentlyUpdated(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    special: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.special(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    subbedAnime: async (req, res) => {
        const { page = 1 } = req.query;
        try{
           const response = await SERVICE.subbedAnime(page);
        responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    topAiring: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.topAiring(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    topUpcoming: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.topUpcoming(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    tv: async (req, res) => {
        const { page = 1 } = req.query;
        try{
            const response = await SERVICE.AnimeTv(page);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },
    spotlight: async (req, res) => {
        try{
            const response = await SERVICE.spotlight();
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
        }
    },

    search: async (req, res) => {
        const { page = 1,query = '' } = req.body;
        try{
            const response = await SERVICE.search(query, page);
            console.log(response);
            responseHandler(res, true, HTTP_CODES.OK.code, HTTP_CODES.OK.message, response);
        }catch(e){
            console.log(e);
            responseHandler(res, false, HTTP_CODES.INTERNAL_SERVER_ERROR.code, HTTP_CODES.INTERNAL_SERVER_ERROR.message, {});
            
        }
    }
}

