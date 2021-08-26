import './App.css';
//import Header from './components/Header';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Lists from './components/Lists';
import Landing from './components/Landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/input">
            <Input />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
