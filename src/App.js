import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Wrapper from './components/Wrapper';
import WatchlistScreen from './screens/WatchlistScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path='/watchlist'>
            <WatchlistScreen />
          </Route>
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
