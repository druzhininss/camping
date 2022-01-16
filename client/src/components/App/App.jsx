import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import Footer from '../Footer/Footer.jsx';
import ProductPage from '../ProductPage/ProductPage.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <ProductPage />
      <Footer />
    </Router>
  );
}

export default App;
