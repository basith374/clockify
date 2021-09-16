import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Clients from './components/views/Clients';
import Projects from './components/views/Projects';
import Tracker from './components/views/Tracker';

function Content() {
  return <div className="w-3/4 bg-gray-100">
    <Switch>
      <Route path="/clients">
        <Clients />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/">
        <Tracker />
      </Route>
    </Switch>
  </div>
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <Content />
        </div>
      </Router>
    </div>
  );
}

export default App;
