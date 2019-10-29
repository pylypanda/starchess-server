const express = require('express');

const NewsCtrl = require('../controllers/news-ctrl');
const TopCtrl = require('../controllers/top-ctrl');
const OpeningCtrl = require('../controllers/opening-ctrl');
const PuzzleCtrl = require('../controllers/puzzle-ctrl');
const EngineCtrl = require('../controllers/engine-ctrl');
const ChampionCtrl = require('../controllers/champion-ctrl');
const OldLeaderCtrl = require('../controllers/old-leader-ctrl');
const WomChampionCtrl = require('../controllers/w-champion-ctrl');
const BookCtrl = require('../controllers/book-ctrl');

const router = express.Router();

router.get('/news/:id', NewsCtrl.getNewsById);
router.get('/news/limit/:quantity', NewsCtrl.getSomeNews);
router.get('/news', NewsCtrl.getNews);
router.get('/top-standart', TopCtrl.getTopStandartPlayers);
router.get('/top-w-standart', TopCtrl.getTopStandartWomPlayers);
router.get('/top-rapid', TopCtrl.getTopRapidPlayers);
router.get('/top-w-rapid', TopCtrl.getTopRapidWomPlayers);
router.get('/top-blitz', TopCtrl.getTopBlitzPlayers);
router.get('/top-w-blitz', TopCtrl.getTopBlitzWomPlayers);
router.get('/openings/:name', OpeningCtrl.getOpeningByName);
router.get('/openings/type/:opType', OpeningCtrl.getOpeningsByType);
router.get('/puzzles/type/:puzType', PuzzleCtrl.getPuzzlesByType);
router.get('/engines', EngineCtrl.getEngines);
router.get('/champions', ChampionCtrl.getChampions);
router.get('/old-leaders', OldLeaderCtrl.getOldLeaders);
router.get('/w-champions', WomChampionCtrl.getWomensChampions);
router.get('/books', BookCtrl.getBooks);

module.exports = router;
