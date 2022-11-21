import React, { useState } from 'react'

function Login (prop){
    const [validLog, setValidLog ] = useState({
        uname : "",
        password : ""
    })
    
    const [invalidUserStyle, setInvalidUserStyle ] = useState(false)
    const [invalidUserInput,  setInvalidUserInput] = useState(false)

    const [invalidUserStyle1, setInvalidUserStyle1 ] = useState(false)
    const [invalidUserInput1,  setInvalidUserInput1] = useState(false)

    function validLogin (event){
        const {name, value, pattern} =  event.target
        setValidLog((prevValue)=>{
          return {
            ...prevValue,
            [name] : {value, pattern}
          }
        })
      }

      function handleLoginClick(){
       
       const {uname, password} = (validLog)
        const {username , Loginpassword} = (prop.loginCredential)

        const receivedUsername = username.toLowerCase()
        const receivedPassword = Loginpassword.toLowerCase()
        const enteredUsername = uname.value.toLowerCase()
        const enteredPassword = password.value.toLowerCase()
        
        if (receivedUsername === enteredUsername && receivedPassword === enteredPassword){
            prop.handleHomeClick({
                trueorfalse : true,
                userLog : uname.value.toUpperCase()
              })
        }else if (!enteredUsername && !enteredPassword) {
            setInvalidUserStyle(true)
            setInvalidUserStyle1(true)
        } 
        
        if (!enteredUsername){
            setInvalidUserStyle(true)
        }else if (enteredUsername && enteredUsername !==receivedUsername){
            setInvalidUserStyle(true)
            setInvalidUserInput(true)
        }
        if(!enteredPassword){
            setInvalidUserStyle1(true)
        }else if(enteredPassword && enteredPassword !==receivedPassword){
            setInvalidUserStyle1(true)
            setInvalidUserInput1(true)
        }

      }
      function clear (event){
        const {name} = event.target
        if(name === 'uname'){
            setInvalidUserStyle(false) 
        }else if (name === 'password'){
            setInvalidUserStyle1(false)
        }
      }

    return <main>
    <div className="type_form">
            <div className="loginTypewriter">
            <h1>LOGIN NOW</h1>
            </div>
            <form className="cardForm">
                <div className="row gy-3">
        
                <div className="col-md-12">
                    <label htmlFor="fname" className="form-label">Username</label>
                    <input onClick={clear} type="text" className="form-control" id="user_name" name="uname" inputMode="text" placeholder="e.g. Jane243" required=""  autoComplete="off" onChange = {validLogin}  pattern="^[a-zA-Z0-9]+$"/>
                    <small className="text-muted">Pick a username</small>
                    <div id="invalid-feedback1" style={invalidUserStyle ? {display : "block"}: {display : "none"}} >
                      {invalidUserInput ? "User Not Found" : "Username is required"}
                    </div>
                  </div>

                
                <div className="col-md-12">
                    <label htmlFor="cnumber" className="form-label">Password</label>
                    <input onClick={clear} type="password" className="form-control" id="Password" name="password"  required="" minLength="8" autoComplete="off" onChange = {validLogin} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"/>
                    <small className="text-muted">Enter Password</small>
                    <div id="invalid-feedback3" style={invalidUserStyle1 ? {display : "block"}: {display : "none"}}>
                     {invalidUserInput1 ? "Incorrect Password" : "Enter Your Password"}
                    </div>
                  </div>
                </div>
            </form> 
            <div className="buttonsub">
              <button className="w-100 btn btn-primary btn-lg submitButton" onClick={handleLoginClick} type="submit" >Login</button>
          </div>
          <div className='signUplink'>
             <h5 >No account yet? <button className='signupLinkButton'>Signup</button> </h5>
          </div>
          
          
           
        </div>
        </main>
}

export default Login;




