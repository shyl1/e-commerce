import React, { createContext, useEffect, useState } from 'react'

export  const UserContext =createContext()

export default function UserContextProvider({children}) {

const[token,setToken] = useState(null)
useEffect(()=>{
    if(localStorage.getItem('userToken')!== null){
        setToken(localStorage.getItem('userToken'))
    }
},[])
  return (
    <UserContext.Provider value={{token,setToken}}>
        {children}
    </UserContext.Provider>
  )
}
