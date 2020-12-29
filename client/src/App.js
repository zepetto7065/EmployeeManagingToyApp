import React from "react";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import reactGet from './board/reactGet'

function App() {
  return (
      <Router>
            <div>
              
              <hr />

              {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
              */}
            <Switch>
              <Route exact path="/reactGet" component={reactGet} />
            </Switch>
          </div>
      </Router>
  );
}

=======
import UserComponent from './components/UserComponent'

function App(){
  return(
    <div className="App">
      <UserComponent /> 
    </div>
  )
}


>>>>>>> 8683c7c... 서버-클라이언트 통신테스트
export default App;

