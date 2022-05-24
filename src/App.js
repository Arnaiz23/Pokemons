import './App.css';
import { Route } from 'wouter'
import PokemonsHome from './pages/PokemonsHome';
import PokemonInfo from './pages/PokemonInfo';

function App() {
  return (
    <div className="App">
      <Route path='/' component={PokemonsHome} />
      <Route path='/pokemon' component={PokemonsHome} />
      <Route path='/pokemon/:id' component={PokemonInfo} />
    </div>
  );
}

export default App;
