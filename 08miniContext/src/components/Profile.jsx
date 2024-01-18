import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {setUser} = useContext(UserContext)

    if(!user) return <div>please login</div>
    return 
        <div>Welcom {user.username}</div>
    
}

export default Profile