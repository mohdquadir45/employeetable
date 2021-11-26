import React from 'react'
import { useState } from 'react'
import credential from './credential.json'

export default function Form(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isInvalid, setIsInvalid] = useState(false)
    /* const[isValidate, setIsValidate]=useState("") */

    

    const login = () => {
        if (username === credential.username && password === credential.password) {
            console.log("login Success")
            props.onLogin()
        }

        if (password.length < 6) {
            setIsInvalid(true)
        }
        else {
            setIsInvalid(false)
        }
    }

    const reset = () => {
        setUsername("")
        setPassword("")
        
    }
    const validateEmail = (email) => {
        var temp = "Thisisast@ring.";
        var count = (temp.lastIndexOf('@')===temp.indexOf('@') && temp.lastIndexOf('.')===temp.indexOf('.') && temp.indexOf(' ') === -1);
        console.log(count);
      };
      console.log(validateEmail('aa@gm#@.com'));







    return (
        
        <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'> Login</h2>
            
            <div >
                 <input className="form-control  form-control-lg" type="text" placeholder="Username" name="" value={username}  onChange={(e) => setUsername(e.target.value)}/>
                 <br/>
                 {isInvalid && <span>please enter valid Username</span>}
                
            </div>
            <br/>
    
            <div>
                <input className="form-control  form-control-lg" placeholder='Password' name="" type="password" value={password}  onChange={  (e) => setPassword(e.target.value) } />
                <br/>
                {isInvalid && <span>Password length should be grater than 6 letters</span>}
                
                
            </div>
            <button class="btn btn-outline-secondary" onClick={() => login()}>Login</button>
        
            <button onClick={() =>  reset() } class="btn btn-outline-secondary">Reset</button>
        </div>
        </div>
    )
}
