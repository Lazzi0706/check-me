'use client'

import React, { useState, useEffect} from 'react'
import User from '../props'

export const AppInput = ({userInfo}: any) => {
    const [ckey, setCkey] = useState<string>('')
    const API_URL = 'http://localhost:3001/api'

    const handleInput = async (e : React.ChangeEvent<HTMLInputElement>) => {
        setCkey(e.target.value)
    }

    const handleSubmit = async (e : any) => {
        e.preventDefault()
        fetch(`${API_URL}/getUser/${ckey}`)
        .then((res) => {
            return res.json()
        })
        .then((data : Array<User>) => {
            if (data.length == 0) { // bruh
                userInfo()
                return
            }
            userInfo({
                ckey: data[0]['ckey'],
                first_appearance: data[0]['first_appearance'],
                last_appearance: data[0]['last_appearance'],
                discord_name: data[0]['discord_name']
            })
        })
        .catch((e) => console.error(e))
    }

    return (
    <div id="app-input" className='border-t-foreground border-t-2 pl-2 pt-1 pb-1'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Написать...' onChange={handleInput} className='bg-gray-900 text-foreground rounded-full pl-2 w-1/2' />
            <button type="submit" className='border-x-2 border-y-2 rounded-full bg-blue-700 w-10 ml-2 border-blue-700'> &#10095; </button>
        </form>
    </div>
    )
}