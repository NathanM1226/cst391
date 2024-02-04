// Importing the router from the express package
import { Request, Response, Router } from "express";
// Importing the getArtists from  the controller file
import * as ArtistsController from "./artists.controller";


const router = Router();
router 
    .route('/artists')
    .get(ArtistsController.getArtists);

export default router;