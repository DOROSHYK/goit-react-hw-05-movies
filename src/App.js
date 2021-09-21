import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import routes, { pagesRoutes } from './routes';
import Spinner from './components/Spinner/Spinner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Suspense fallback={<Spinner />}>
          <Switch>
            {pagesRoutes.map(route => (
              <Route key={route.path} {...route} />
            ))}
            <Redirect to={routes.error} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
