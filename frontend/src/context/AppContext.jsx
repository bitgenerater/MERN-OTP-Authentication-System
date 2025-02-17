import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Changed to "isLoggedIn"
  const [userData, setUserData] = useState(null); // Better to initialize as "null" instead of "false"

const getAuthState = async () =>{
  try{

    const {data} = await axios.get(backendUrl + '/api/auth/is-auth');

    if(data.success){
      setIsLoggedIn(true)
      getUserData()
    }
  }catch{
    toast.error(error.message)
  }
}
useEffect(()=>{
    getAuthState();
},[])

  const getUserData = async () =>{
    try{
      const {data} = await axios.get(backendUrl + '/api/user/data');
      data.success ? setUserData(data.userData):TransformStream.error(data.message);

    }catch(error){
      TransformStream.error(error.message);
    }
  }

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
