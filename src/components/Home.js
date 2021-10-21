
export default function Home({currentUser}) {

    console.log(currentUser)

    function handleClick() {

    }

    return (
        <>
        <div className="container1">
            <div className="welcome">
                <h1>Welcome, Gamer!</h1>
            <div className="profile">
                {currentUser ? 
                <>
                <h2>{currentUser.username}</h2>
                <img src={currentUser.avatar} alt="you"/>
                <p>{currentUser.bio}</p> 
                </> :
                ''
                }
                <button onClick={handleClick}>Edit Profile</button>
            </div>
            </div>
        </div>
        </>
    )

}