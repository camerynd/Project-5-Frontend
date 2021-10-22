import {useState} from 'react'

export default function EditForm({user, submitForm}) {

    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState(user.password)
    const [bio, setBio] = useState(user.bio)
    const [avatar, setAvatar] = useState(user.avatar)

  function handleSubmit(e) {
      e.preventDefault()
      submitForm(user.id, username, password, bio, avatar)
  }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                placeholder="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                placeholder="bio"
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
            <input
                placeholder="avatar"
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form> 
    )

}