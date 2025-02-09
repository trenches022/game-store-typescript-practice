import { FC } from "react";
import { GameFromServer } from "./data";

interface GameProps {
  game: GameFromServer;
}

const Game: FC<GameProps> = ({ game }) => {
  return (
    <div className="game-card">
      <h2 className="game-title">{game.name}</h2>
      {game.imgSrc && <div className="game-img"><img src={game.imgSrc} alt={game.description} /></div>}
      {game.version && <p className="game-version">Version: {game.version}</p>}
      {game.description && <p className="game-description">{game.description}</p>}
      {game.developer && <p className="game-developer">Developer: {game.developer}</p>}
      {game.publisher && <p className="game-publisher">Publisher: {game.publisher}</p>}
      {game.releaseDate && <p className="game-release-date">Release Date: {game.releaseDate}</p>}
      {game.rating && <p className="game-rating">Rating: {game.rating}/10</p>}
      {typeof game.price === 'number' && (
        <p className="game-price">Price: ${game.price.toFixed(2)}</p>
      )}
      {game.tags && (
        <div className="game-tags">
          {game.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      )}
      <button className="add-to-cart-btn">Add to cart</button>
    </div>
  );
};

export default Game;
