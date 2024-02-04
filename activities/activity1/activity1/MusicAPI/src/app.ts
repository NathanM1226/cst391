// Importing the express package
import express, { Request, Response } from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors'; 
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

//Creates a variable of the express package
const app = express();
//Creates a variable for the port
const port = process.env.PORT;

// enable all CORS request
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true}));

// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

// Application routes
// Root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the MusicAPI</h1>');
});

// adding router middleware
app.use('/', [albumsRouter, artistsRouter]);

app.listen(port, () => {
    //The text that is sent to the log
    console.log(`Example app listening at http://localhost:${port}`)
});