import { execute } from "../services/mysql.connector";
import { Artist } from "./artists.model";
import { artistQueries } from "./artists.queries";

export const getArtists = async () => {
    return execute<Artist[]>(artistQueries.getArtists, []);  
};