/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-useless-escape */
import "./index.css";
import Track from "./song";
import data from "./data/album.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Playlist</h1>
      </header>

      <main>
        <div id="songList">
          {data.map((track, index) => (
            <Track
              url={track.album.images[1].url}
              tittle={track.name}
              artists={track.artists[0].name}
              album={track.album.name}
            ></Track>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
