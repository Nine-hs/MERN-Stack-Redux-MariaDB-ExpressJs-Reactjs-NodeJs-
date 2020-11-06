import React from 'react';
import './Employee.css'
import { Route, Switch, Redirect,BrowserRouter as router} from 'react-router-dom'
import Navbar from '../Component/Employee/Navbar'
import Footer from '../Component/Employee/Footer'
import Home from './Sub-Employee/Home'
import Setting from './Sub-Employee/Setting'
import { withRouter } from "react-router-dom"

const Employee = (props) => {
    return (
       <>
            <Navbar {...props} />
            <section className="page-content">
                
                
              <Switch>
                
                <Route path={`${props.match.path}/`} exact component={Home} /> 
                <Route path={`${props.match.path}/setting`} exact component={Setting} />
              </Switch>
              {/*<Footer />*/}
            </section>
        
        </>
    )
}

export default withRouter(Employee)