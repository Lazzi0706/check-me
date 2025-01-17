'use client'

import React, { useState } from "react"
import { AppInfo } from "./elements/app-info"
import { AppNotFound } from "./elements/app-not-found"
import { AppInput } from "./elements/app-input"
import User from "./props"

export const App = () => {
    const [data, setData] = useState<User>()

    const handleInput = (data : User) => {
        setData(data)
    }

    return (
        <div id="app-wrapper" className='m-auto flex flex-col w-1/2 bg-gray-950 mt-10 text-white border-blue-950 border-l-4 rounded-l-lg'>
            {data ? <AppInfo ckey={data.ckey} first_appearance={data.first_appearance} last_appearance={data.last_appearance} discord_id={data.discord_id}/> : <AppNotFound/>}
            <AppInput userInfo = {handleInput}/>
        </div>
    )
}