import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import LoginPage from './Pages/LoginPage/LoginPage';
import AllProducts from './Pages/AllProducts/AllProducts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SingelProduct from './Pages/SingelProduct/SingelProduct';
import Payment from './Pages/Payment/Payment';
import Dashboard from './Pages/Dashboard/Dashboard';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/explore'>
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path='/order/:id'>
              <SingelProduct></SingelProduct>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path='/payment/:insertedId'>
              <Payment></Payment>
            </PrivateRoute>
            <Route exact path='*'>
              <h1>Pages Not Found</h1>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
