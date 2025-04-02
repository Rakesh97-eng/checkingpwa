import { useState } from "react"
import "./call.css"
const Call = ()=>{
    const [minimized,setMinimized] = useState(false)
    const handleMinize = ()=>{
        setMinimized(true)
    }
    return (
        <>
            Calling 
            <div className="video_container">
            <button onClick={handleMinize}>Minimize</button>
             {!minimized && <div className="local_user"></div>}
             <video className={!minimized?"remote_user":"min_remote_user"} ></video>
            </div>
        </>
    )
}

export default Call;    ;