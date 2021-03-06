import React from 'react';

import Movies from './components/movies';

import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';

function App() {
  return (
    <>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/login' component={LoginForm} />
          <Route path='/movies/:id' component={MovieForm} />
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' to='/movies' exact />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </>
  );
}

export default App;
