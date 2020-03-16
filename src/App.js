import React from 'react';
// import { Router, Route } from 'react-router-dom';
import RegistrationForm from '../src/pages/registrationForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        {/* <Router>
          <Route path="/registration" component={RegistrationForm}></Route>
        </Router> */}
        <RegistrationForm></RegistrationForm>
      </body>
    </div>
  );
}

export default App;
