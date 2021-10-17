import './App.css';
import React, { lazy, Suspense, FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Lazy Loading Pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
//Lazy loading Pages

const App: FunctionComponent = () => {
  return (
    <>
      <Router>
        <Suspense
          fallback={() => {
            console.log('Loading');
          }}
        >
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
