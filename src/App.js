/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-useless-escape */
import "./index.css";
import data from "./data/album.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Playlist</h1>
      </header>

      <main>
        <div id="songList">
          <div className="song">
            <div className="song-cover">
              <img src={data.album.images[1].url} alt="song" />
            </div>
            <div className="song-details">
              <h3 className="song-tittle">
                <strong>{data.name}</strong>
              </h3>
              <p className="song-artist">
                artist: <strong>{data.artists[0].name}</strong>
              </p>
              <p className="song-album">
                album: <strong>{data.album.name}</strong>
              </p>
            </div>
            <button
              dangerouslySetInnerHTML={{ __html: "\u25B6" }}
              className="song-play"
            ></button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
