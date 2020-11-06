import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login/Login'
import Employee from './Employee/Employee'
import Student from './Student/Student'
import ProtectedRoute from './Protected/ProtectEmployee'
import PrivateStudent from './Protected/Protected.Student'
import PrivateAdvisor from './Protected/Protected.Advisor'
import Advisor from './Advisor/Advisor' 


function App() {
  return (
   <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />

        <ProtectedRoute path="/employee">  
          <Employee />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="employee" />
        </Route>

        <PrivateStudent path="/student">  
          <Student />
        </PrivateStudent>
        <Route exact path="/">
          <Redirect exact from="/" to="student" />
        </Route>

        <PrivateAdvisor path="/advisor">  
          <Advisor />
        </PrivateAdvisor>
        <Route exact path="/">
          <Redirect exact from="/" to="advisor" />
        </Route>

        <Route path="*" component={() => <Redirect to="/login" />} />
      </Switch>
   </BrowserRouter>
  );
}

export default App;
