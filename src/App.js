import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Register from './components/authentication/register'
import Login from './components/authentication/login.js'

const App = () =>{
  return(
  
  
    <Router>
        <Layout>
            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/register' component = {Register}/>
                <Route exact path ='/login' component = {Login} />
                
            </Switch>
        </Layout>
    </Router>
)
};

export default App;
