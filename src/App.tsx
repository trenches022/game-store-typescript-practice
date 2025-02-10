import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import { GamesFromServer } from "./data";
import Game from "./Game";
import AdultOrNot from "./AdultQuestion";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import { getGamesFromServer } from "./utils";

function MainContent({ games, isAdult }: { games: GamesFromServer; isAdult: boolean }) {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {location.pathname !== "/cart" && (
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
      )}
    </>
  );
}

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
    <Router>
      <MainContent games={games} isAdult={isAdult} />
    </Router>
  );
}

export default App;
