import { Request, RequestHandler, Response } from "express";
import * as ArtistDao from './artists.dao';

export const getArtists: RequestHandler =async (req:Request, res: Response) => {
    try{
        const artists = await ArtistDao.getArtists();

        res.status(200).json(
            artists
        );
    } catch (error){
        console.error('[artists.controller][GetArtists][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching artists'
        });
    }
}