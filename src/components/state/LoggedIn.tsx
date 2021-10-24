import { useState } from "react"

const LoggedIn = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            {isLoggedIn 
                ? <button onClick={handleLogOut} >Logout</button> 
                : <button onClick={handleLogin} >Login</button>}
            <div>User is 
                {isLoggedIn 
                    ? 'logged in' 
                    : 'logged out'} 
            </div>
        </div>
    )
}

export default LoggedIn
