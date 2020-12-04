import './styles/main.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserPage from './UserPage';
import UserItemPage from './UserItemPage';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/user" exact component = {UserPage} />
          <Route path = "/user/item" exact component = {UserItemPage} />          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

