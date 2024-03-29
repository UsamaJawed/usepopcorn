import { useState } from "react";
import WatchedMovie from "./WatchedMovie";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WathedMovieList";

export default function WatchedBox({ watched }) {
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
