import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const App = () => {
    return (
        <div>
		  <h1>Music I like</h1>
		  <Card 
		    albumTitle="Abbey Road"
            albumDescription="Abbey Road is the eleventh studio album by English rock band the Beatles, 
            released on 26 September 1969 by Apple Records. The recording sessions for the album were the 
            last in which all four Beatles participated."
            imgURL="https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Beatles_-_Abbey_Road.jpg/220px-Beatles_-_Abbey_Road.jpg"
		  />
		  <Card 
		    albumTitle="Let It Be"
            albumDescription="Let It Be is the twelfth and final studio album by the English rock band the Beatles. 
            It was released on 8 May 1970, almost a month after the group's break-up."
            imgURL="https://upload.wikimedia.org/wikipedia/en/thumb/2/25/LetItBe.jpg/220px-LetItBe.jpg"
		  />
		  <Card 
		    albumTitle="Help!"
            albumDescription="Help! is the fifth studio album by English rock band the Beatles and the soundtrack from their film Help!. It was released on 6 August 1965."
            imgURL="https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Help%21_%28The_Beatles_album_-_cover_art%29.jpg/220px-Help%21_%28The_Beatles_album_-_cover_art%29.jpg"
		  />
		</div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));