import {Switch,Route} from "react-router-dom"
import Home from "./components/Home"
import MasterPage from "./components/MasterPage"
import MasterSignUp from "./components/MasterSignUp"
import StudentSignUp from "./components/StudentSignUp"
import StudentLogin from "./components/StudentLogin"
import StudentPage from "./components/StudentPage"
import MasterLogin from "./components/MasterLogin"
import './App.css';

const App =()=> (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/mastersignup" component={MasterSignUp}/>
    <Route exact path="/masterlogin" component={MasterLogin}/>
    <Route exact path="/masterpage" component={MasterPage}/>
    <Route exact path="/studentsignup" component={StudentSignUp}/>
    <Route exact path="/studentpage" component={StudentPage}/>
    <Route exact path="/studentlogin" component={StudentLogin}/>
  </Switch>
)

export default App;