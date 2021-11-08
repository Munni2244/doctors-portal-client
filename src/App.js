import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import Appointment from './component/Appointment/Appointment/Appointment';
import Login from './component/Login/Login/Login';
import Register from './component/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './component/Login/Login/PrivateRoute/PrivateRoute';
import Dashbord from './component/Dashbord/Dashbord/Dashbord';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     
     <Switch>

       <Route exact path="/">
        <Home></Home>
       </Route>

       <Route path="/home">
        <Home></Home>
       </Route>

       <PrivateRoute path="/appointment">
        <Appointment></Appointment>
       </PrivateRoute>

       <PrivateRoute path="/dashbord">
        <Dashbord></Dashbord>
       </PrivateRoute>

       <Route path="/login">
       <Login/>
       </Route>

       <Route path="/register">
       <Register/>
       </Route>

     </Switch>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
