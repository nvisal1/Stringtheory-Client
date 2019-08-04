import React from 'react';
import { 
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './home/home';
import history from './history';

const App: React.FC = () => {
  return (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
  )
}

export default App;