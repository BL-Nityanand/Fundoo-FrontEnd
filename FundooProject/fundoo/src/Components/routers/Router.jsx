import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../../Pages/dashboard/Dashboard'
import SignIn from '../../Pages/SignIn/SignIn'
import SignUp from '../../Pages/SignUp/SignUp'

function Router() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/dashboard" component={()=><Dashboard autorized={true}/>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router