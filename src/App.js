import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import LandingPage from './views/LandingPage';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (<div>
      <GlobalStyle />
      <LandingPage />
    </div>
  );
}

export default App;
