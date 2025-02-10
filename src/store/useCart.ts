import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  description?: string;
  version?: string;
  price?: number;
  tags?: string[];
  forKids: boolean;
  releaseDate?: string;
  developer?: string;
  publisher?: string;
  rating?: number;
  imgSrc?: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (game: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const useCart = create<CartState>((set) => ({
  cart: [],

  addToCart: (game) => set((state) => {
    const existingGame = state.cart.find((item) => item.id === game.id);

    if (existingGame) {
      return {
        cart: state.cart.map((item) =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }

    return { cart: [...state.cart, { ...game, quantity: 1 }] };
  }),

  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),

  clearCart: () => set({ cart: [] }),
}));

export default useCart;
