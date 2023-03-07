import { ReactNode, useContext, useEffect, useState } from "react";
import Favorite from "../models/Favorite";
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from "../services/FavoritesService";
import FavoritesContext from "./FavoritesContext";
import UserContext from "./UserContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { user } = useContext(UserContext);

  const loadFavorites = async () => {
    if (user) {
      const favorites: Favorite[] = await getFavorites(user._id!);
      setFavorites(favorites);
    } else {
      setFavorites([]);
    }
  };

  const addFavoriteHandler = async (newFavorite: Favorite): Promise<void> => {
    if (user) {
      await addFavorite(newFavorite, user._id!);
      loadFavorites();
    }
  };

  const deleteFavoriteHandler = async (id: string): Promise<void> => {
    if (user) {
      await deleteFavorite(user._id!, id);
      loadFavorites();
    }
  };

  const isFav = (id: string): boolean =>
    favorites.some((favorite) => favorite.event.id === id);

  useEffect(() => {
    (async () => {
      loadFavorites();
    })();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavoriteHandler, deleteFavoriteHandler, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
