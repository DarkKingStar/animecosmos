import {Router} from 'express';

import Validation from '../../../middleware/validation.js';
import VALIDATE from '../../../validate.js';

import CONTROLLER from '../controller/anime.controller.js';

const animeRoute = Router();

animeRoute.get('/most-popular', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.mostPopular);

animeRoute.get('/dubbed-anime', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.dubbedAnime);

animeRoute.get('/latest-completed', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.latestCompleted);

animeRoute.get('/most-favorite', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.mostFavorite);

animeRoute.get('/anime-movies', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.animeMovies);

animeRoute.get('/ona', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.ona);

animeRoute.get('/ova', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.ova);

animeRoute.get('/recently-added', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.recentlyAdded);

animeRoute.get('/recently-updated', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.recentlyUpdated);

animeRoute.get('/special', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.special);

animeRoute.get('/subbed-anime', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.subbedAnime);

animeRoute.get('/top-airing', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.topAiring);

animeRoute.get('/top-upcoming', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.topUpcoming);

animeRoute.get('/tv', Validation(VALIDATE.ONLYPAGENUMBER), CONTROLLER.tv);

animeRoute.get('/spotlight', CONTROLLER.spotlight);

animeRoute.post('/search', Validation(VALIDATE.QUERYANDPAGE), CONTROLLER.search);

export default animeRoute;