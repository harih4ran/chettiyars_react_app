import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Register from './components/authentication/register'

const App = () =>{
  return(
  
  
    <Router>
        <Layout>
            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/register' component = {Register}/>
                
                
            </Switch>
        </Layout>
    </Router>
)
};

export default App;