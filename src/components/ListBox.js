import { useState } from "react";
import Movie from "./Movie";

export default function ListBox({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list">
          {movies?.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}