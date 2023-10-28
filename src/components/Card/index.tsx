import { Repo } from '../../types/Repo';
import './styles.css';

interface CardProps {
  repo: Repo
  addToFavorites: (id: number) => void
  removeFromFavorites: (id: number) => void
  favorite: boolean
}

export default function Card({
  repo,
  addToFavorites,
  removeFromFavorites,
  favorite
}: CardProps) {
  function handleAddRepoFavorite() {
    addToFavorites(repo.id);
  }

  function handleRemoveRepoFromFavorites() {
    removeFromFavorites(repo.id);
  }

  return (
    <div className='card'>
      <h2>{repo.name}</h2>

      <div className="card-buttons">
       {!favorite ? (
          <button onClick={handleAddRepoFavorite}>
            Favoritar
          </button>) : (
            <button onClick={handleRemoveRepoFromFavorites} >
              Remover dos Favoritos
            </button>
          )}
      </div>
    </div>
  )
}