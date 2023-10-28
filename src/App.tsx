import './App.css'
import Card from './components/Card';
import useFetchRepos from './queries/repo'
import { useFavoriteRepoStore } from './store/useFavoriteRepos';

function App() {
  const { data } = useFetchRepos('gabrielsens');

  const favoriteReposId = useFavoriteRepoStore((state) => state.favoriteReposId);
  const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteRepoStore((state) => state.removeFromFavorites);

  return (
    <div>
      {data?.map((repo) => (
        <Card
          key={repo.id}
          repo={repo}
          favorite={favoriteReposId.includes(repo.id)}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      ))}
    </div>
  )
}

export default App
