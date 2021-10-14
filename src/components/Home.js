
export default function Home({currentUser}) {

    console.log(currentUser.user.username)

    function handleClick() {

    }

    return (
        <>
        <div className="container">
            <div className="welcome">
            <h1>Welcome, Gamer!</h1>
            <div className="profile">
                {/* <h2>{currentUser.user.username}</h2>
                <img src={currentUser.user.avatar} alt="you"/>
                <p>{currentUser.user.bio}</p> */}
                <button onClick={handleClick}>Edit Profile</button>
            </div>
            </div>
        </div>
        </>
    )

}