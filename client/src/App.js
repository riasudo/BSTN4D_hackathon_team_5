// import './styles/main.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserPage from './UserPage';
import UserItemPage from './UserItemPage';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import ProfilesPage from './ProfilesPage';
import SizeProfile from './SizeProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <SignInPage/> */}
          <Route path = "/" exact component = {SignInPage} />
          {/* <Route path = "/" exact component = {HomePage} /> */}
          <Route path = "/profiles" exact component = {ProfilesPage} />
          <Route path = "/profiles/create" exact component = {SizeProfile} />
          <Route path = "/user" exact component = {UserPage} />
          <Route path = "/user/item" exact component = {UserItemPage} />          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

