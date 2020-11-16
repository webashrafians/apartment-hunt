import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import HouseRentDetails from './Component/Home/Home/HouserentDetails/HouserentDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/houserentdetails">
          <HouseRentDetails></HouseRentDetails>
        </Route>


        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
