import React, {useState} from 'react'
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import Footer from './Footer';
import Header from './Header'



function App(){

    const [displayLogin, setDisplayLogin ] = useState(false)  
    const [displaySignUp, setDisplaySignup] = useState(true) 
    const [loginDetails, setLoginDetails] = useState({
        username : '',
        Loginpassword : ''
    })
    const [isLogged, setIsLogged ] = useState(false)
    const [myUserName, setMyUserName ] = useState('')


    function LoginClick(prop){
        setDisplayLogin(prop.trueorfalse)
        setDisplaySignup(false)
        setLoginDetails({
            username: prop.user,
            Loginpassword: prop.pass
        })
     }

     function HomeClick(prop){
        setIsLogged(prop.trueorfalse)
        setMyUserName(prop.userLog)
        setDisplayLogin(false)

     }


    return <div>
     <Header checkHomeStat = {isLogged} />
    {isLogged ? <Home user ={myUserName} /> : null}
    {displaySignUp ? <Signup handleLogClick = {LoginClick} /> : null}
    {displayLogin ? <Login loginCredential = {loginDetails} handleHomeClick = {HomeClick} /> : null}
    <Footer checkLogStat = {isLogged}/>
    
    </div>
    

}


export default App; 