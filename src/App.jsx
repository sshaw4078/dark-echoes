import { useState } from "react";
import {episodeList} from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  

  function Roster() {
    return (
      <section className="roster">
        <h2>Episodes</h2>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
}

function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>
          Episode {selectedEpisode.id}: {selectedEpisode.title}
        </h2>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>My Show</h1>
      </header>
      <main>
        <Roster />
        <EpisodeDetails />
      </main>
    </>
  );
}