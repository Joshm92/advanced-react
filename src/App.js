import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./Articles.js";
import Article from "./Article.js";


const App = () => (
    <Router>
    
      <Switch>
        <Route path="/articles/:id" render={ ({ match }) => ( <Article id={ match.params.id } />
        )}/>
        
        <Route path="/articles" component={ Articles }></Route>
      
      </Switch>
    
    </Router>

);


export default App;
