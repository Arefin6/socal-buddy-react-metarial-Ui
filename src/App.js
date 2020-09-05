import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
 
  return (
   <div>
     <Router>
       <Switch>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/posts/:postId">
         <PostDetails></PostDetails>
         </Route>
         <Route path="*">
          <h2>Page Not Found 404!</h2>
         </Route>

       </Switch>
     </Router>
     
   </div>
  );
}

export default App;
