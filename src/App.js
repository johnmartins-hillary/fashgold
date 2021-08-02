import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';


function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/about">
           <Header />
           <About />
          </Route>
          <Route path="/contact">
           <Header />
           <Contact />
          </Route>
          <Route path="/SignUp">
           <Header />
           <SignUp />
          </Route>
          <Route path="/LogIn">
           <Header />
           <LogIn />
          </Route>
          <Route path="/">
            <Header />
            <Home />
           </Route>
        </Switch>
      {/* AppFooter */}
    </div>
    </Router>
  );
}

export default App;
