import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Lists from './components/Lists';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <hr />


        <Switch>
          <Route path="/input">
            <Input />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
