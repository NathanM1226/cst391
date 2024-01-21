// Importing the express package
import express, { Request, Response } from 'express';

//Creates a variable of the express package
const app = express();

//Creates a variable for the port
const port = 3000;

// This is the code to start sending information to the web page
app.get('/', (req: Request, res: Response) => {

//Sending the text to the web page
res.send('Hello World from TypeScript!');

});

//
app.listen(port, () => {
    //The text that is sent to the log
    console.log(`Example app listening at http://localhost:${port}`)
    
});