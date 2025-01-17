import User from '../props'

export const AppInfo = ({ckey, discord_id, first_appearance, last_appearance}: User) => {
    return (
        <>
        <div id="app-header" className='ml-4 shadow-sm shadow-black pt-2 pb-2'>
            <h1 className='font-bold'> {ckey ? "Информация об игроке ".concat(ckey) : " "} </h1>
        </div>
        <div id="container" className='ml-4'>
            <div id="app-meta-info">
                <ul>
                    <li> Дискорд:  {discord_id ? discord_id : " "} </li>
                    <li> Первое появление: {first_appearance ? first_appearance : " "} </li> 
                    <li> Последнее появление: {last_appearance ? last_appearance : " "} </li> 
                </ul>
            </div>
            <div id="app-ingame">
                <h1 className='pb-1 font-bold'> Персонажи: </h1>
                <ul>
                </ul>
            </div>
        </div>
        <footer id='app-inner-footer' className='ml-4'>
            <span className='text-gray-400'> Новый смешной футер. Могут быть косяки </span>
         </footer>
    </>
    )
}