import { Request, Response, RequestHandler } from "express";
import { Album } from './albums.model';
import { Track } from '../tracks/tracks.model';
import * as AlbumDao from './albums.dao';
import * as TrackDao from "../tracks/tracks.dao"
import { OkPacket } from "mysql";

export const getAlbums: RequestHandler = async (req: Request, res: Response) => {
    try{
        let albums;
        let albumId = parseInt(req.query.albumId as string);

        console.log('albumId', albumId);
        if (Number.isNaN(albumId)){
            albums = await AlbumDao.getAlbums();
        } else{
            albums = await AlbumDao.getAlbumsByAlbumId(albumId);
        }
        await getTracks(albums, res);

        res.status(200).json(
            albums
        );
    }catch (error){
        console.error("[albums.controller][getAlbums][Error]", error);
        res.status(500).json({
            message: "There was an error while fetching the albums"
        });
    }
};

export const getAlbumsByArtist: RequestHandler =async (req:Request, res: Response) => {
    try{
        const albums = await AlbumDao.getAlbumsByArtist(req.params.artist);

        await getTracks(albums, res);

        res.status(200).json(
            albums
        );
    } catch (error){
        console.error("[albums.controller][getAlbums][Error] ", error);
        res.status(500).json({
            message: "There was an error when fetching albums"
        });
    }
};

export const getAlbumsByArtistSearch: RequestHandler =async (req:Request, res: Response) => {
    try{
        console.log('search', req.params.search);
        const albums = await AlbumDao.getAlbumsByArtistSearch('%' + req.params.search + '%');

        await getTracks(albums, res);

        res.status(200).json(
            albums
        );
    } catch (error) {
        console.error("[albums.controller][getAlbums][Error] ", error);
        res.status(500).json({
            message: "There was an error when fetching albums"
        });
    }
};

export const getAlbumsByDescriptionSearch: RequestHandler =async (req:Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const albums = await AlbumDao.getAlbumsByDescriptionSearch('%' + req.params.search + '%');

        await getTracks(albums, res);

        res.status(200).json(
            albums
        );
    } catch (error) {
        console.error("[albums.controller][getAlbums][Error] ", error);
        res.status(500).json({
            message: "There was an error when fetching albums"
        });
    }
};

export const createAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AlbumDao.createAlbum(req.body);

        console.log('req.body', req.body);
        console.log('album', okPacket);

        req.body.tracks.forEach(async (track: Track, index: number) => {
            try {
                await TrackDao.createTrack(track, index, okPacket.insertId);
            } catch (error) {
                console.error("[albums.controller][createAlbumsTracks][Error] ", error);
                res.status(500).json({
                    message: "There was an error when writing album tracks"
                });
            }
        });

    }catch (error) {
        console.error("[albums.controller][createAlbumTracks][Error] ", error);
        res.status(500).json({
            message: "There was an error when writing albums"
        });
    }
};

export const updateAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AlbumDao.updateAlbum(req.body);

        console.log('req.body', req.body);
        console.log('album', okPacket);

        req.body.tracks.forEach(async (track: Track, index: number) => {
            try {
                await TrackDao.updateTrack(track);
            } catch (error){
                console.error('[albums.controller] [updateAlbum] [Error] ', error);
                res.status (500).json({
                    message: 'There was an error when updating album tracks'
            });
            }
        });
    } catch (error){
        console.error('[albums.controller] [updateAlbum] [Error] ', error);
            res.status (500).json({
                message: 'There was an error when updating albums'
    });
    }
};

async function getTracks(albums: Album[], res: Response<any, Record<string, any>>){
    for (let i = 0; i < albums.length; i++){
        try{
            const tracks = await TrackDao.getTracks(albums[i].albumId);
            albums[i].tracks = tracks;
        } catch (error){
            console.error('[albums.controller][getTracks][Error]', error);
            res.status(500).json({
                message: 'There was an error when fetching the album tracks'
            });
        }
    }
};

export const deleteAlbum: RequestHandler = async (req: Request, res: Response) => {
      try{
        let albumId = parseInt (req.params.albumId as string);
        console.log('albumId', albumId);

        if (!Number.isNaN(albumId)){
            const response = await AlbumDao.deleteAlbum (albumId);
            res.status(200).json(
                response
            );
        } else{
            throw new Error("integer expected for albumId")
        }

      } catch (error){
        console.error('[albums.controller] [deleteAlbum] [Error] ', error);
            res.status (500).json ({
            message: 'There was an error when deleting albums'
            });
      }
}
