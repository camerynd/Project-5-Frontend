
export default function LoginPage({login}) {

    function handleClick() {
        login()
    }

    return (
        <div className="Login">
            <button onClick={handleClick}>Login</button>
        </div>
    )

}