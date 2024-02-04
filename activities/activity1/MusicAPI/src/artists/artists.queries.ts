export const artistQueries = {
    getArtists: `
    SELECT 
        DISTINCT artist AS artist
    FROM music.albums
    `
}