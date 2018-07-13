import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { All, Individual } from './components';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={All} />
          <Route path='/:user' component={Individual} />
        </Switch>
      </Router>
    );
  }
}

export default App;
