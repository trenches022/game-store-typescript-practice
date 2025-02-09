import { useState, useEffect } from "react";
import "./App.css";
import { GamesFromServer } from "./data";
import Game from "./Game";
import AdultOrNot from "./AdultQuestion";
import { getGamesFromServer } from "./utils";

function App() {
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [games, setGames] = useState<GamesFromServer>([]);

  useEffect(() => {
    getGamesFromServer().then((gamesFromServer) => {
      setLoading(false);
      setGames(gamesFromServer);
    });
  }, []);

  if (loading) {
    return <div className="loading">Downloading games...</div>;
  }

  if (isAdult === null) {
    return <AdultOrNot setIsAdult={setIsAdult} />;
  }

  return (
    <div className="store-container">
      <h1 className="store-title">Game Store</h1>
      <div className="game-list">
        {games.map((game) => (
          <div key={game.id} className="game-wrapper">
            {game.forKids && !isAdult ? (
              <div className="restricted">This game is not available to you</div>
            ) : (
              <Game game={game} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
