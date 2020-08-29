import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home } from './Home.js'
import { tokenInfo } from './tokenInfo.js'
import { NoMatch } from './NoMatch.js'
import { Layout } from './Components/Layout'
import { NavigationBar } from './Components/NavBar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout >          
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/info' component={tokenInfo}/>
              <Route component={NoMatch}/>     
            </Switch>  
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
