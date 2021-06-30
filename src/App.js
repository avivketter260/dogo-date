import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './components/LandingPage';
import EmailValidtion from "./components/EmailValidtion";
import NewPassword from "./components/NewPassword";
import OnBoard from './components/OnBoard'
import UserName from './components/createProfile/UserName'
import MainPage from "./components/MainPage";
import Location from "./components/createProfile/Location";
import Signin from "./components/Signin";
import UploadImg from "./components/createProfile/UploadImg"
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path='/signup' exact component={EmailValidtion} />
          <Route path='/password' exact component={NewPassword} />
          <Route path='/onboard' exact component={OnBoard} />
          <Route path='/username' exact component={UserName} />
          <Route path='/location' exact component={Location} />
          <Route path='/main-page' exact component={MainPage} />
          <Route path='/sign-in' exact component={Signin}/>
          <Route path='/upload-img' exact component={UploadImg} />
          <Route path='/'  component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
