import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import Products from '../Products/Products.jsx';
import Footer from '../Footer/Footer.jsx';
import ProductPage from '../ProductPage/ProductPage.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/palatki" exact component={Products} />
        <Route path="/spalniki" exact component={Products} />
        <Route path="/kovriki" exact component={Products} />
      </Switch>
      <ProductPage />
      <Footer />
    </Router>
  );
}

export default App;
