import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';

import LandingPage from './views/LandingPage';
import About from './views/About';
import GlobalStyle from './components/GlobalStyle';

const defaultLanguage = () => {
    if(localStorage.getItem('lang'))
        return localStorage.getItem('lang');
    return 'ro';
}

function App() {

    const [language, setLanguage] = useState(defaultLanguage());

  return (<Router>
      <GlobalStyle />

      <Switch>
          <Route exact path='/about'>
                <About language={language} setLanguage={setLanguage} />
          </Route>
          <Route exact path='/'>
              <LandingPage language={language} setLanguage={setLanguage} />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
