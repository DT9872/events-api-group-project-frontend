import { createContext } from "react";
import Favorite from "../models/Favorite";

interface FavoritesContextModel {
  favorites: Favorite[];
  addFavoriteHandler: (favorite: Favorite) => void;
  deleteFavoriteHandler: (id: string) => void;
  isFav: (id: string) => boolean;
}
const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavoriteHandler: () => {},
  deleteFavoriteHandler: () => {},
  isFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
