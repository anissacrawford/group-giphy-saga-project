import React from 'react';
import GiphyList from '../GiphyList/GiphyList';
import FavoriteList from '../FavoriteList/FavoriteList';
import GiphyForm from '../GiphyForm/GiphyForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <h1>Giphy Search!</h1>

        <Route path='/'>
          <header>
            <nav>
              <p><Link to='/'>Search</Link></p>
              <p><Link to='/favorites'>Favorites</Link></p>
            </nav>
          </header>
        </Route>

        <Route exact path='/'>
          <GiphyForm />
          <GiphyList />
        </Route>

        <Route path='/favorites'>
          <FavoriteList />
        </Route>

      </div>
    </Router>
  );
}

export default App;
