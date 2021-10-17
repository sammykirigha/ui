
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Landing from './components/home/Landing';
// import LoginForm from './containers/login/LoginForm';
// import SignupContainer from './containers/signup/SignupContainer';
// import Topbar from './components/layouts/Topbar';
// import Sidebar from './components/layouts/Sidebar';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser.jsx'
import UserList from './pages/userList/UserList';
import NewProject from './pages/newProject/NewProject';
import ProjectSingleCard from './pages/projects/ProjectSingleCard.jsx'
import ProjectList from './pages/projects/ProjectList';
import NewTask from './pages/tasks/NewTask';
import Dashboard from './containers/home/Dashboard';
import LoginContainer from './containers/login/LoginContainer';
// import Admin from './components/isAdmin/Admin';


function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact  component={LoginContainer} />
          <Route path='/dashboard' exact component={Dashboard} />
          {/* <Route path='/admin' exact component={Admin} /> */}
          <Route path='/projects' exact component={ProjectList} />
          <Route path='/user/:userId/edit' exact component={User} />
          <Route path='/newuser' exact component={NewUser} />
          <Route path='/userlist' exact component={UserList} />
          <Route path='/newproject' exact component={NewProject} /> 
          {/* <Route path='/project/edit' exact component={ProjectEdit} /> */}
          <Route path='/newtask' exact component={NewTask} />
        </Switch>
    </Router>
  );
}

export default App;
