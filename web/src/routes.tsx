import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Forgot from './pages/Forgot'

function Routes() {
    
    // function checkConnection(){}

    
    return (
        <BrowserRouter >
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/login" component={Login} />
            <Route path="/sign" component={Signin} />
            <Route path="/forgot" component={Forgot} />
        </BrowserRouter>
    )
}

export default Routes
