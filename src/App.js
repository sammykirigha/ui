
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/home/Landing';
import LoginForm from './components/login/LoginForm';
import SignupContainer from './components/signup/SignupContainer';
import Home  from './components/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser.jsx'
import UserList from './pages/userList/UserList';
import NewProject from './pages/newProject/NewProject';
import ProjectSingleCard from './pages/projects/ProjectSingleCard.jsx'
import ProjectList from './pages/projects/ProjectList';
import NewTask from './pages/tasks/NewTask';

function App() {
  return (
    <Router>
        {/* <Route path='/' exact component={Landing} />
        <Route path='/auth/login' exact component={LoginForm} />
        <Route path='/auth/signup' exact component={SignupContainer} /> */}
         <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={ProjectList} />
          <Route path='/projects' exact component={ProjectList} />
          <Route path='/user/:userId/edit' exact component={User} />
          <Route path='/newuser' exact component={NewUser} />
          <Route path='/userlist' exact component={UserList} />
          <Route path='/newproject' exact component={NewProject} />
          <Route path='/project/edit' exact component={ProjectEdit} />
          <Route path='/newtask' exact component={NewTask} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
