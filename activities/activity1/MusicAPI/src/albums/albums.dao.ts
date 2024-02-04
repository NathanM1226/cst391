import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Album } from "./albums.model";
import { albumQueries } from './albums.queries';

export const getAlbums = async () => {
    return execute<Album[]>(albumQueries.getAlbums, []);
};

export const getAlbumsByArtist = async (artistName:string) => {
    return execute<Album[]>(albumQueries.getAlbumsByArtist, [artistName]);
};

export const getAlbumsByArtistSearch =async (search:string) => {
    console.log("search param", search);
    return execute<Album[]>(albumQueries.getAlbumsByArtistSearch, [search]);
};

export const getAlbumsByDescriptionSearch =async (search:string) => {
    console.log("search param", search);
    return execute<Album[]>(albumQueries.getAlbumsByDescriptionSearch, [search]);
};

export const getAlbumsByAlbumId =async (albumId:number) => {
    return execute<Album[]>(albumQueries.getAlbumsByAlbumId, [albumId]);
};

export const createAlbum =async (album:Album) => {
    return execute<OkPacket>(albumQueries.createAlbum,
        [album.title, album.artist, album.description, album.year, album.image]);
};

export const updateAlbum =async (album:Album) => {
    return execute<OkPacket>(albumQueries.createAlbum,
        [album.title, album.artist, album.year, album.image, album.description, album.albumId]);
};

export const deleteAlbum =async (albumId:number) => {
    return execute<OkPacket>(albumQueries.deleteAlbum, [albumId]);
};