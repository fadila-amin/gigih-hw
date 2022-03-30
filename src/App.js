/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-useless-escape */

import React, { useCallback, useEffect } from "react";
import "./index.css";
import { Track, Search } from "./song";
import data from "./data/album.js";
import axios from "axios";
function App() {
  const [album, setAlbum] = React.useState([]);
  const [token, setToken] = React.useState("");

  const onSearch = useCallback((val) => {
    callApi(val);
  });
  async function callApi(val) {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      params: {
        q: val,
        type: "track",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAlbum(data.tracks.items);
  }
  useEffect(() => {
    const hash = window.location.hash;

    let tokenIn;

    if (hash !== "") {
      tokenIn = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";

      setToken(tokenIn);
    }
  }, []);

  const login = () => {};
  const CLIENT_ID = "7d56d7fc81fc4b8ab568e3f579961009";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE = "playlist-modify-private";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Playlist</h1>
      </header>

      <main>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
          onClick={login}
        >
          loggin
        </a>

        <Search search={onSearch} />
        <div id="songList">
          {album &&
            album.map((track, index) => (
              <Track
                key={track.id}
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
