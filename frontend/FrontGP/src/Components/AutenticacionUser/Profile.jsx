import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

export const Profile =()=>{
    const {user,isAuthenticated,isLoging} =useAuth0();
    if(isLoging){
        return <div>Loading...</div>;

    }

    return (

    isAuthenticated &&(
        <>
        <div>
            <div>
            <img src={user.picture} alt={user.name}/>
            <h2> {user.name}</h2>
            <p>Email: {user.email}</p>
            </div>

            <div>
                <JSONPretty data={user} />;
            </div>

        </div>
        </>
    )
    );

};