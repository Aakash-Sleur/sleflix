import HomeScreen from './Screens/HomeScreen'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Utils/firebase.js';
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './Screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (useAuth) => {
      if(useAuth){
        dispatch(login({
          uid: useAuth.uid,
          email: useAuth.email,
        })
        )
      }
      else{
        dispatch(logout())
      }
    });

    return unSubscribe
  }, [dispatch])

  return (
    <div className="app">
      {!user ? (
              <LoginScreen />
            ) : (
      <Routes>   
            <Route path='/profile' element={<ProfileScreen/>}/>      
            <Route exact path='/' element={<HomeScreen />}/>  
      </Routes> 
            )
            }
    </div>
  )
}

export default App
