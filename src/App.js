import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import ContactUs from './pages/ContactUs';
import Facilities from './pages/Facilities';
import Home from './pages/Home';
import Rooms from './pages/Rooms';

function App() {
  return (
    <div>
      
      <BrowserRouter >
        <Switch>

        <Route exact path="/R_Hotel">
            <Home />
          </Route>

          <Route exact path="/Facilities" >
            <Facilities />
          </Route>

          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>

          <Route exact path="/Rooms">
            <Rooms />
          </Route>

        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;