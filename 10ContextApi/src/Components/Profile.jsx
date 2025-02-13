import React, {useContext} from "react";
import userContext from "../ContextApi/userContext";
function Profile() {
    const {data} = useContext(userContext)
    if(!data) return <div>Please Login</div>
    return  <div className="text-center">
                <h3>Welcome, {data.username}</h3>
                <h5>username is : {data.username}</h5>
            </div>
    
}
export default Profile