import { create } from "zustand";
import { persist } from 'zustand/middleware'

interface FavoriteRepoStore {
  favoriteReposId: number[];
  addToFavorites: (repoId: number) => void;
  removeFromFavorites: (repoId: number) => void
}

export const useFavoriteRepoStore = create(
  persist<FavoriteRepoStore>((set) => ({
    favoriteReposId: [],
    addToFavorites: (repoId: number) => {
      set((state) => ({
        favoriteReposId: [...state.favoriteReposId, repoId],
      }))
    },
    removeFromFavorites: (repoId: number) => {
      set((state) => ({
        favoriteReposId: state.favoriteReposId.filter((repo) => repo !== repoId)
      }))
    },
  }), {
    name: 'repo-storage',
  })
)