import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import Products from '../Products/Products.jsx';
import Footer from '../Footer/Footer.jsx';
import Cart from '../Cart/Cart.jsx';
import ProductPage from '../ProductPage/ProductPage.jsx';
import AdminPanel from '../AdminPanel/AdminPanel.jsx';
import Registration from '../Registration/Registration.jsx';
import AdminPanelOrders from '../AdminPanelOrdersList/AdminPanelOrdersList.jsx';
import AdminPanelProductsList from '../AdminPanelProductsList/AdminPanelProductsList.jsx';
import Login from '../Login/Login.jsx';
import UserProfile from '../UserProfile/UserProfile.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import style from './App.module.css';

function App() {
  return (
    <Router>
      {window.location.pathname !== ('/admin' || '/admin/order' || '/admin/products') && <Nav />}
      <div className={style.appFlex}>
        <div className={style.app}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:categoryName" exact component={Products} />
            <Route path="/products/:categoryName/:productId" exact component={ProductPage} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/admin" exact component={AdminPanel} />
            <Route path="/admin/orders" exact component={AdminPanelOrders} />
            <Route path="/admin/products" exact component={AdminPanelProductsList} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/feedback" exact component={Feedback} />
          </Switch>
        </div>
      </div>
      {window.location.pathname !== ('/admin' || '/admin/order' || '/admin/products' || '/profile') && <Footer />}

    </Router>

  );
}

export default App;
