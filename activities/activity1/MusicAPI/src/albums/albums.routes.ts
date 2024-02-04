// Importing the router from the express package
import { Router } from "express";
// Importing the getAlbums from  the controller file
import * as AlbumsController from "./albums.controller";

const router = Router();
router.
    route('/albums').
    get(AlbumsController.getAlbums);

router.
    route('/albums/:artist').
    get (AlbumsController.getAlbumsByArtist);

router.
    route('/albums/search/artist/:search').
    get (AlbumsController.getAlbumsByArtistSearch);

router.
    route('/albums/search/description/:search').
    get (AlbumsController.getAlbumsByDescriptionSearch);

router.
    route( '/albums ').
    post (AlbumsController.createAlbum);

router.
    route('/albums ').
    put (AlbumsController.updateAlbum);

router.
    route('/albums/:albumId').
    delete(AlbumsController.deleteAlbum);
    
export default router;
