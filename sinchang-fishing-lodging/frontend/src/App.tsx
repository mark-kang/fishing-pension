import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import Boats from './pages/Boats';
import Booking from './pages/Booking';
import About from './pages/About';
import './styles/globals.css';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lodging" component={Lodging} />
            <Route path="/boats" component={Boats} />
            <Route path="/booking" component={Booking} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;