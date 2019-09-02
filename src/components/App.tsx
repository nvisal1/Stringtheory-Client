import React, { Component } from 'react';
import { 
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './home/home';
import Login from './auth/pages/login/login';
import Register from './auth/pages/register/register';
import history from '../history';
import { Navbar } from './shared/components/navbar/navbar';
import Curriculum from './curriculum/curriculum';
import Exercise from './exercise/exercise';
import { mapDispatchToProps } from '../actions';
import { connect } from 'react-redux';

class App extends Component<any, any>  {

  componentDidMount() {
    this.props.loadUserFromToken();
  }

  AuthContainer = () => (
    <div>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </div>
  )

  DefaultContainer = () => (
    <div>
      <Navbar />
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/curriculum' component={Curriculum}/>
      </div>
    </div>
  )

  InteractionContainer = () => (
    <div>
      <Navbar />
      <div>
        <Route exact path='/exercise' component={Exercise}/>
      </div>
    </div>
  )

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={this.AuthContainer}/>
          <Route exact path='/register' component={this.AuthContainer}/>
          <Route exact path='/exercise' component={this.InteractionContainer}/>
          <Route component={this.DefaultContainer} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);