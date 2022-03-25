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
          <Track
            url={data.album.images[1].url}
            tittle={data.name}
            artists={data.artists[0].name}
            album={data.album.name}
          ></Track>
        </div>
      </main>
    </div>
  );
}

export default App;
