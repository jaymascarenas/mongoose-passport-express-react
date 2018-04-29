import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Books from './pages/Books';
import Login from './components/Login';
import Register from './components/Register';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Books} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
);
registerServiceWorker();

export default App;
