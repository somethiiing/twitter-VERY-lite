import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Individual, Header } from './components';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='content' >
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/:user' component={Individual} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
