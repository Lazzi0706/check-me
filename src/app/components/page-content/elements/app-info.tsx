import { Character, UserInfo } from '../props'

export const AppInfo = ({user, characters}: UserInfo) => {
    return (
        <>
        <div id="app-header" className='ml-4 shadow-sm shadow-black pt-2 pb-2'>
            <h1 className='font-bold'> {user.ckey ? "Информация об игроке ".concat(user.ckey) : " "} </h1>
        </div>
        <div id="container" className='ml-4'>
            <div id="app-meta-info">
                <ul>
                    <li> Дискорд:  {user.discord_id ? user.discord_id : " "} </li>
                    <li> Первое появление: {user.first_appearance ? user.first_appearance : " "} </li> 
                    <li> Последнее появление: {user.last_appearance ? user.last_appearance : " "} </li> 
                </ul>
            </div>
            <div id="app-ingame">
                <h1 className='pb-1 font-bold'> Персонажи: </h1>
                {characters?.map((character : Character) => (
                    <li key={character.id}>
                        {character.name}, {character.age} лет
                    </li>
                ))}
            </div>
        </div>
        <footer id='app-inner-footer' className='ml-4'>
            <span className='text-gray-400'> Новый смешной футер. Могут быть косяки </span>
         </footer>
    </>
    )
}