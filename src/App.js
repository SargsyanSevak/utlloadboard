import {Routes,Route} from 'react-router-dom'
import LoadBoard from './LoadBoard/LoadBoard';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import IsLogin from './IsLogin/IsLogin';
import Dashboard from './Dashboard/Dashboard';
import Home from './Dashboard/pages/Home';
import AddLoads from './Dashboard/pages/AddLoads';
import Settings from './Dashboard/pages/Settings';
import ChangeLoads from './Dashboard/pages/ChangeLoads'
import Layout from './Layout';
import { useContext } from 'react';
import { ContextValue } from './Context/Context';
import { useEffect } from 'react';
import instance from './axios.js'
import auth from './auth';


function App() {

const {setData} = useContext(ContextValue)
const {user,setUser} = useContext(ContextValue)
const {setActiveUser} = useContext(ContextValue)
const loggedIn = localStorage.getItem('logged')
let userName = localStorage.getItem('userName')

useEffect(() => {
instance   
    .get("/posts")
    .then((res) => {
      setData(res.data.reverse());
    })
}, []);

useEffect(() => {
auth   
    .get("/users")
    .then((res) => {
      setUser(res.data);
      setActiveUser(res.data.filter((user)=>{
        return user.username === userName
      }))
    })
}, []);


  
return  (
     <>
  <Routes>
        <Route path='/' element={loggedIn ? <LoadBoard/> : <LoginPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='loadboard' element={
          <IsLogin>
                <LoadBoard/>
                <Layout/>
          </IsLogin>
        }/>
        
        <Route path="dashboard" element={loggedIn ? <Layout/>: <LoginPage/>}>
          <Route index element={<Home/>}/>
          <Route path='/dashboard/addloads' element={<AddLoads/>}/>
          <Route path='/dashboard/changeloads'  element={<ChangeLoads/>}/>
          <Route path='/dashboard/settings' element={<Settings/>}/>
        </Route>
    </Routes>
</>
  )
}

export default App;

