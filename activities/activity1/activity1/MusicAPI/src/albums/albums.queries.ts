export const albumQueries = {
    getAlbums: `
    SELECT
        id AS albumId, title AS title, artist AS artist,
        description AS description, year AS year, image AS image
    FROM music.albums
    `,
    getAlbumsByArtist: `
    SELECT 
        id AS albumId, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
    FROM music.albums
    WHERE music.albums.artist = ?
    `,
    getAlbumsByArtistSearch: `
    SELECT
        id AS albumId, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
    FROM music.albums
    WHERE music.albums.artist LIKE ?
    `,
    getAlbumsByDescriptionSearch: `
    SELECT
        id AS albumId, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
    FROM music.albums
    WHERE music.albums.description LIKE ?
    `,
    getAlbumsByAlbumId: `
    SELECT
        id AS albumId, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
    FROM music.albums
    WHERE music.albums.id = ?
    `,
    createAlbum: `
    INSERT INTO ALBUMS(title, artist, description, year, image) VALUES(?,?,?,?,?)
    `,
    updateAlbum: `
    UPDATE music.albums
    SET title = ?, artist = ?, description = ?, year = ?, image = ?
    WHERE id = ?
    `,
    deleteAlbum: `
    DELETE FROM music.albums
    WHERE id = ?
    `,
}