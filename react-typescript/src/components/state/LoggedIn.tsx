import { useState } from 'react'

type LoggedInProps = {
    name: string
}

interface User {
    name: string,
    email: string,
}

export const LoggedIn = (props: LoggedInProps) => {

    // const [loggedIn, setloggedIn] = useState <User | null> () // useState Future Value
    const [loggedIn, setloggedIn] = useState({} as User) // useState Type Assertion

    const handleLogIn = () => {
        setloggedIn({
            name: 'Loi',
            email: 'pvloi100@gmail.com'
        })
    }
    const handleLogOut = () => {
        // setloggedIn(null) // useState Future Value
        setloggedIn({} as User) // useState Type Assertion
    }

    return (
        <div>
            <button onClick={handleLogIn} >Login</button>
            <button onClick={handleLogOut} >Logout</button>

            {/* useState Type Assertion */}
            {/* <div>User name is {loggedIn?.name}</div>
            <div>User email is {loggedIn?.email}</div> */}

            {/* // useState Type Assertion */}
            <div>User name is {loggedIn?.name}</div>
            <div>User email is {loggedIn?.email}</div>
        </div>
    )
}