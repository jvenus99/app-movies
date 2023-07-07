import { lazy } from 'react'
import HeaderMolecule from './shared/presentation/components/header.molecule'
import FooterMolecule from './shared/presentation/components/footer.molecule'
const MovieFactory = lazy(
  () => import('./movie/application/movie.factory')
)

function App() {

  return (
    <div className="app-container">
      <HeaderMolecule />
      <MovieFactory />
      <FooterMolecule />
    </div>
  )
}

export default App
