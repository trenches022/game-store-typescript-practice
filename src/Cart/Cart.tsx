import './Cart.css';
import useCart from '../store/useCart';
import { FC } from 'react';
import { CartItem } from '../store/useCart';

const Cart: FC = () => {

  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className='cart-container'>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((game: CartItem) => (
            <div key={game.id} className='cart-item'>
              {game.imgSrc && <div className="game-img"><img src={game.imgSrc} alt={game.description} /></div>}
              {game.version && <p className="game-version">Version: {game.version}</p>}
              {game.description && <p className="game-description">{game.description}</p>}
              {game.developer && <p className="game-developer">Developer: {game.developer}</p>}
              {game.publisher && <p className="game-publisher">Publisher: {game.publisher}</p>}
              {game.releaseDate && <p className="game-release-date">Release Date: {game.releaseDate}</p>}
              {game.rating && <p className="game-rating">Rating: {game.rating}/10</p>}
              <p>{game.name} (x{game.quantity})</p>
              <button onClick={() => removeFromCart(game.id)} className='remove-from-cart-btn'>Remove from cart</button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      )}

    </div>
  )
}

export default Cart;