import './App.css';
import Signup from './Forms/SignupForm/SignupForm';
import Login from './Forms/LoginForm/LoginForm';
import Reset from './Forms/ResetPasswordForm/ResetForm';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route path="/" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/reset" exact component={Reset}/>
      </div>    
    </BrowserRouter>

  );
}

export default App;
