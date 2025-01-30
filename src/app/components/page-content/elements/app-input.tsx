'use client'

import React, { useState } from 'react'

export const AppInput = ({userInfo}: any) => {
    const [ckey, setCkey] = useState<string>('')
    
    const API_URL = 'http://localhost:3001/api'

    const handleInput = async (e : React.ChangeEvent<HTMLInputElement>) => {
        setCkey(e.target.value)
    }

    const handleSubmit = async (e : any) => {
        e.preventDefault()
        
        const success = ( res : any )  => res.ok ? res.json() : Promise.resolve({})

        const user = fetch(`${API_URL}/user/${ckey}`).then(success)
        const charatcers = fetch(`${API_URL}/user/${ckey}/characters`).then(success)

        Promise.all([user, charatcers])
        .then(([userRes, charactersRes]) => {
            userInfo({
                user: userRes[0],
                characters: charactersRes
            })
        })
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