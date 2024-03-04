import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Main({ movies, watched }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
}
