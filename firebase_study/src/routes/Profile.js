import { authService } from "../fbase"

export default function Profile () {
    
    const onLogOutClick = () => {
        authService.signOut();
    }

    return (
        <div>
            <button onClick={ onLogOutClick }>log out</button>

        </div>
    )
};