import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import Products from '../Products/Products.jsx';
import Footer from '../Footer/Footer.jsx';
import Cart from '../Cart/Cart.jsx';
import ProductPage from '../ProductPage/ProductPage.jsx';
import AdminPanel from '../ AdminPanel/ AdminPanel.jsx';
import Registration from '../Registration/Registration.jsx'
import AdminPanelOrders from '../ AdminPanelOrders/ AdminPanelOrders.jsx';
import AdminPanelProducts from '../ AdminPanelProducts/ AdminPanelProducts.jsx'
import Login from '../Login/Login.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/palatki" exact component={Products} />
        <Route path="/products/spalniki" exact component={Products} />
        <Route path="/products/kovriki" exact component={ProductPage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/admin" exact component={AdminPanel} />
        <Route path="/admin/order" exact component={AdminPanelOrders} />
        <Route path="/admin/products" exact component={AdminPanelProducts} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
