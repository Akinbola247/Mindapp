import React from 'react'
import { useState } from "react"

function Signup(props){
  const [invalidStyle, setInvalidStyle] = useState(false)
  const [invalidStyle2, setInvalidStyle2] = useState(false)
  const [invalidStyle3, setInvalidStyle3] = useState(false)
  const [invalidStyle4, setInvalidStyle4] = useState(false)


  const [invalidInput, setInvalidInput] = useState(false)
  const [invalidInput2, setInvalidInput2] = useState(false)
  const [invalidInput3, setInvalidInput3] = useState(false)
  const [invalidInput4, setInvalidInput4] = useState(false)

  const [position, setPosition ] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: ""

  })
   
  function userValid (event){
    const {name, value, pattern} =  event.target
    setPosition((prevValue)=>{
      return {
        ...prevValue,
        [name] : {value, pattern}
      }
    })
  }
  
  function handleClick(event){
    const {fname, email, password, confirmPassword} = position
   if (fname && fname.value.match(fname.pattern) && email && email.value.match(email.pattern) && password && password.value.match(password.pattern) && confirmPassword && confirmPassword.value === password.value){
           props.handleLogClick({
            trueorfalse : true,
            user: fname.value,
            pass: password.value
          })
   } 

   if (!fname.value){
    setInvalidStyle(true)
   }else if (fname && !fname.value.match(fname.pattern)){
    setInvalidStyle(true)
    setInvalidInput(true)
   }
   
   if (!email.value){
    setInvalidStyle2(true)
   }else if (email && !email.value.match(email.pattern)){
    setInvalidStyle2(true)
    setInvalidInput2(true)
   }

   if (!password.value){
    setInvalidStyle3(true)
   }else if(password.value && !password.value.match(password.pattern)){
    setInvalidStyle3(true)
    setInvalidInput3(true)
   }

  if(!confirmPassword.value){
    setInvalidStyle4(true)
   }else if (confirmPassword && confirmPassword.value !== password.value){
    setInvalidStyle4(true)
    setInvalidInput4(true)
   }
  }
  function clear(event){
    const {name} = event.target
    if (name === 'fname'){
      setInvalidStyle(false)
    }if (name === 'email'){
      setInvalidStyle2(false)
    }if (name === 'password'){
      setInvalidStyle3(false)
    }if (name === 'confirmPassword'){
      setInvalidStyle4(false)
    }
  }


    return <main>
    <div className="type_form">
            <div className="typewriter">
            <h1>REGISTER NOW</h1>
            </div>
            <form className="cardForm">
                <div className="row gy-3">
        
                <div className="col-md-12">
                    <label htmlFor="fname" className="form-label">Username</label>
                    <input onClick={clear} type="text" className="form-control" id="user_name" name="fname" inputMode="text" placeholder="e.g. Jane243" required=""  autoComplete="off" onChange = {userValid}  pattern="^[a-zA-Z0-9]+$"/>
                    <small className="text-muted">Pick a username</small>
                    <div id="invalid-feedback1" style={invalidStyle ? {display : "block"}: {display : "none"}}>
                      {invalidInput ? "Username must only contain numbers and letters" : "Username is required"}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="fname" className="form-label">Email</label>
                    <input onClick={clear} type="email" className="form-control" name="email" id="email_name" inputMode="email" placeholder="e.g. abc@email.com" required="" autoComplete="off" onChange = {userValid} pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)"/>
                    <small className="text-muted">Type a valid email</small>
                    <div id="invalid-feedback2" style={invalidStyle2 ? {display : "block"}: {display : "none"}}>
                      {invalidInput2 ? "Enter a valid email" : "Email is required"}
                    </div>
                  </div>
                
                <div className="col-md-12">
                    <label htmlFor="cnumber" className="form-label">Password</label>
                    <input onClick={clear} type="password" className="form-control" id="Password" name="password"  required="" minLength="8" autoComplete="off" onChange = {userValid} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*?])(?=.{8,})"/>
                    <small className="text-muted">Min. of eight(8) characters with at least an uppercase, lowercase & number</small>
                    <div id="invalid-feedback3" style={invalidStyle3 ? {display : "block"}: {display : "none"}}>
                      {invalidInput3 ? "Your password must contain least 1 uppercase, lowercase, special character and must contain at least 8 characters" : "Pick a Password"}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="cnumber" className="form-label">Confirm Password</label>
                    <input onClick={clear} type="password" className="form-control" id="CPassword" name="confirmPassword" onChange = {userValid} required="" minLength="8" autoComplete="off"/>
                    <div id="invalid-feedback4" style={invalidStyle4 ? {display : "block"}: {display : "none"}}>
                      {invalidInput4 ? "Password don't match" : "Confirm your Password"}
                    </div>
                  </div>
        
                </div>
            </form> 
            <div className="buttonsub">
              <button className="w-100 btn btn-primary btn-lg submitButton" onClick={handleClick} type="submit" >Submit</button>
          </div>
           
        </div>
        </main>
}
export default Signup;