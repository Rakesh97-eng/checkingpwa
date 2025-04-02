import { useLocalStorage } from "../../hooks/useLocalStorage"

const UserInfo = ()=>{
    const {localstate} = useLocalStorage()
    console.log("localstatess",localstate);
    
    return (
        <>
        The useris {localstate?.login?"Logged in":"Logged Out"}
        </>
    )
}

export default UserInfo