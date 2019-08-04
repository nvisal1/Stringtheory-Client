import React from 'react';
import { 
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './home/home';
import history from './history';
import { Navbar } from './shared/components/navbar/navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Router history={history}>
          <Switch>
      
              <Route exact path="/" component={Home}/>
          </Switch>
      </Router>
    </div>
  )
}

export default App;