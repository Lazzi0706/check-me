'use client'

import React, { useState, useEffect} from 'react'

export const AppInput = () => {
    const [ckey, setCkey] = useState<string>('')
    const [data, setData] = useState<any>()

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCkey(e.target.value)
    }
    
    const handleSubmit = (e : any) => {
        e.preventDefault()
        useEffect( () => {
            fetch('http://localhost:3001/api/getUser/' + ckey)
            .then( (data) => setData(data.json()))
            .catch( (err) => console.error(err))
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