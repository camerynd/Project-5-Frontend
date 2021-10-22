import {useState} from 'react'
import EditForm from './EditForm'

export default function Home({currentUser}) {

    // const [form, setForm] = useState(false)
    // const [user, setUser] = useState(currentUser)

    // function handleSubmit(id, username, password, bio, avatar) {

    //     fetch(`http://localhost:3000/users/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           username: `${username}`,
    //           password: `${password}`,
    //           bio: `${bio}`,
    //           avatar: `${avatar}`
    //         }),
    //       })
    //         .then((r) => r.json())
    //         .then(data => console.log(data));
    // }

    function handleClick() {
        // setForm(!form)
    }

    return (
        <>
        <div className="container1">
            <div className="welcome">
                <h1 className="glow">Welcome, Gamer!</h1>
            <div className="profile">
                {currentUser ? 
                <>
                <h2>{currentUser.username}</h2>
                <img src={currentUser.avatar} alt="you"/>
                <p>{currentUser.bio}</p> 
                <button onClick={handleClick}>Edit Profile</button>
                {/* {form ? 
                <EditForm user={currentUser}/>
                : ''
                } */}
                </> :
                ''
                }
            </div>
            </div>
        </div>
        </>
    )

}