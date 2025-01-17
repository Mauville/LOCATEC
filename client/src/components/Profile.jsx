import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton.jsx";
import LoginButton from "./LoginButton.jsx";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated){
      return <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <LogoutButton/>
      </div>
  }
  else{
      return (
          <LoginButton/>
      )
  }

};

export default Profile;