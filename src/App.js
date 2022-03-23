import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AddLink from './Component/AddLink/AddLink';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Packages from './Component/Packages/Packages';
import Pricing from './Component/Pricing/Pricing';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <AddLink></AddLink>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/about'>
          <About></About>
        </Route>

        <Route path='/contact'>
          <Contact></Contact>
        </Route>

        <Route path='/packages'>
          <Packages></Packages>
        </Route>

        <Route path='/pricing'>
          <Pricing></Pricing>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
