import TextAtom from "../../../shared/presentation/components/text.atom"
import MovieCardMolecule from "./movieCard.molecule"
import SearchOrganism from "./search.organism"
import './movie.page.scss'
import { GetMovieCase } from '../../data/useCases/getMovie.case';

interface MoviePageProps {
  getMovieCase: GetMovieCase
}

const MoviePage: React.FC<MoviePageProps> = ({getMovieCase}) => {
  return (
    <div className="movie-page">
      <div className="page-header">
        <TextAtom size="Large" bold>Movie Search</TextAtom>
        <TextAtom size="Medium">Unleash the magic of movies, all in one place. Discover your favorite films and embark on limitless adventures!</TextAtom>
      </div>
      <SearchOrganism getMovieCase={getMovieCase} />
      <MovieCardMolecule />
    </div>
  )
}

export default MoviePage