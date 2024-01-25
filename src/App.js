import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './Components/logIn';
import LogoutButton from './Components/logOut';
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if(isLoading){
    return <div>Loading...</div>
  }
  return (
  <div className='mainPage'>
  {/* {LogIn} */}
    <div className='navbar'>
      {<LoginButton /> && 
        <h2>
          {console.log(user)}
          {user.email} 
        </h2>
      }
      {isAuthenticated &&  <LogoutButton />} 

    </div>
   
  </div>
  );
}

export default App;
