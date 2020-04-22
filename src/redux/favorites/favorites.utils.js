export const handleFavorite = (favorites, payload) => {
  const existingFavorite = favorites.find(favorite => favorite?.name === payload?.name);

  return existingFavorite ? favorites.filter(favorite => favorite?.name !== payload?.name) : [...favorites, payload];
};
