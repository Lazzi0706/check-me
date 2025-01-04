import React from 'react'
import AppInfoProps from '../props'

export const AppInfo = ({ckey, discord_id, experience, first_apperance, last_apperance, charlist}: AppInfoProps) => {
    return (
        <>
        <div id="app-header" className='ml-4 shadow-sm shadow-black pt-2 pb-2'>
            <h1 className='font-bold'> {ckey ? "Информация об игроке ".concat(ckey) : " "} </h1>
        </div>
        <div id="container" className='ml-4'>
            <div id="app-meta-info">
                <ul>
                    <li> Дискорд:  {discord_id ? discord_id : " "} </li>
                    <li> Стаж: {experience ? experience.toLocaleDateString() : " "} </li> 
                    <li> Первое появление: {first_apperance ? first_apperance.toLocaleDateString() : " "} </li> 
                    <li> Последнее появление: {last_apperance ? last_apperance.toLocaleDateString() : " "} </li> 
                </ul>
            </div>
            <div id="app-ingame">
                <h1 className='pb-1 font-bold'> Персонажи: </h1>
                <ul>
                    {charlist ? charlist.map( (key, i) => (
                        <li key={i}> {i}. {key} </li>
                    )) : "" }
                </ul>
            </div>
        </div>
        <footer id='app-inner-footer' className='ml-4'>
            <span className='text-gray-400'> Новый смешной футер. Могут быть косяки </span>
         </footer>
    </>
    )
}