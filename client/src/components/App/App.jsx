import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" exact component={Home} />

      </Switch>

    </Router>
  );
}

export default App;
