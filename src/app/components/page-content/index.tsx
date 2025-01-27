'use client'

import React, { useState } from "react"
import { AppInfo } from "./elements/app-info"
import { AppNotFound } from "./elements/app-not-found"
import { AppInput } from "./elements/app-input"
import { UserInfo } from "./props"

export const App = () => {
    const [userData, setUserData] = useState<UserInfo>()
    const handleInput = (data : UserInfo) => { 
        setUserData(data)
    }

    return (
        <div id="app-wrapper" className='m-auto flex flex-col w-1/2 bg-gray-950 mt-10 text-white border-blue-950 border-l-4 rounded-l-lg'>
            {userData?.user ? <AppInfo user={userData.user} characters={userData.characters}/> : <AppNotFound/>}
            <AppInput userInfo = {handleInput}/>
        </div>
    )
}