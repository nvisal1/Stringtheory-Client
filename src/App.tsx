import React from 'react';
import { 
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './home/home';
import Login from './auth/login/login';
import Register from './auth/register/register';
import history from './history';
import { Navbar } from './shared/components/navbar/navbar';
import Curriculum from './curriculum/curriculum';

const App: React.FC = () => {

  const AuthContainer = () => (
    <div>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </div>
  )

  const DefaultContainer = () => (
    <div>
      <Navbar />
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/curriculum' component={Curriculum}/>
      </div>
    </div>
  )

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={AuthContainer}/>
        <Route exact path="/register" component={AuthContainer}/>
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  );
}





export default App;