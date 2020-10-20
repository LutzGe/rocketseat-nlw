import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Forgot from './pages/Forgot'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signin from './pages/Signin'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'

function Routes() {
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
