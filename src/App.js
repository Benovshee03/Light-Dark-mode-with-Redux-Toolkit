import { Router, Route } from 'react-router-dom';
import Home from './home';
import About from './about';

function App() {

  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/tasks' component={About} />
    </Router>
  );
}

export default App;