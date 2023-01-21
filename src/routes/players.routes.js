import { Router } from "express";
import { getPlayers, getPlayer, createPlayer, updatePlayer, deletePlayer } from "./../controllers/players.controller.js";


const router = Router()

router.get('/players', getPlayers)

router.get('/players/:id', getPlayer)

router.post('/players', createPlayer)

router.patch('/players/:id', updatePlayer)

router.delete('/players/:id', deletePlayer)

export default router;