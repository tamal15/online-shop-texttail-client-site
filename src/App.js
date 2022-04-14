
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Pages/Homes/Home/Home';
// import DashboardHome from './Component/Pages/Dashboard/DashboardHome/DashboardHome';
import AuthProvider from './Component/Pages/Context/AuthProvider/AuthProvider';
import Login from './Component/Pages/Homes/Shared/Login/Login';

import Registration from './Component/Pages/Homes/Shared/Registration/Registration';
import AddProduct from './Component/Pages/Dashboard/DashboardHome/AddProduct/AddProduct';
import DetailsProduct from './Component/Pages/Homes/AllProducts/DetailsProduct/DetailsProduct';
import DashboardHomes2 from './Component/Pages/Dashboard/DashboardHomes2/DashboardHomes2';
import MoreProductShirt from './Component/Pages/Homes/MoreProductShirt/MoreProductShirt';
import Contact from './Component/Pages/Homes/Contact/Contact';
import ThreePieceProduct from './Component/Pages/Dashboard/ThreePieceProduct/ThreePieceProduct'
import DetailsPiece from './Component/Pages/Dashboard/ThreePieceProduct/DetailsPiece/DetailsPiece';
import MoreThreePiece from './Component/Pages/Homes/MoreThreePiece/MoreThreePiece';

import ShoppingAbout from './Component/Pages/Homes/ShoppingAbout/ShoppingAbout';
import PrivetRoute from './Component/Pages/Homes/PrivetRoute/PrivetRoute';
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route  path="/home">
         <Home></Home>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/reg">
         <Registration></Registration>
       </Route>
       {/* <Route path="/dashboard">
        <DashboardHome></DashboardHome>
       </Route> */}
       <Route path="/dashboard">
        <DashboardHomes2></DashboardHomes2>
       </Route>
       <Route path="/addproduct">
        <AddProduct></AddProduct>
       </Route>
       <Route path="/contact">
        <Contact></Contact>
       </Route>
       <Route path="/piece">
        <MoreThreePiece></MoreThreePiece>
       </Route>
       <Route path="/more">
       <MoreProductShirt></MoreProductShirt>
       </Route>
       <Route path="/about">
      <ShoppingAbout></ShoppingAbout>
       </Route>
       <PrivetRoute path='/serviceDetails/:id'>
        <DetailsProduct></DetailsProduct>
      </PrivetRoute>
       <PrivetRoute path='/service/:id'>
        <DetailsPiece></DetailsPiece>
      </PrivetRoute>
     </Switch>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
