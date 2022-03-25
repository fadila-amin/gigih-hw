export default function Track(props) {
  return (
    <div className="song">
      <div className="song-cover">
        <img src={props.url} alt="song" />
      </div>
      <div className="song-details">
        <h3 className="song-tittle">
          <strong>{props.tittle}</strong>
        </h3>
        <p className="song-artist">
          artist: <strong>{props.artists}</strong>
        </p>
        <p className="song-album">
          album: <strong>{props.album}</strong>
        </p>
      </div>
      <button
        dangerouslySetInnerHTML={{ __html: "\u25B6" }}
        className="song-play"
      ></button>
    </div>
  );
}
