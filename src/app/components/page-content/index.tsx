/*
Если нет ckey-я, значит в целом нихуя нет и можно выбрасывать ошибку, ака 'Игрок не найден'/'Данные об игроке отсутсвуют'
Следовательно, вынести весь 'container' в дополнительный компонент, который будет отрисовываться в случае нахождения по ckey-ю

Вводим ckey, далее идёт HTTP-запрос по GET-у ... /user?ckey=input_ckey и он должен вернуть JSON с полями из БД. Список персонажей представлен как массив таких же объектов с другой таблы
*/

import React, { useState } from "react"
import { AppInfo } from "./elements/app-info"
import { AppNotFound } from "./elements/app-not-found"
import { AppInput } from "./elements/app-input"

export const App = () => {
    const ckey = ''

    return (
        <div id="app-wrapper" className='m-auto flex flex-col w-1/2 bg-gray-950 mt-10 text-white border-blue-950 border-l-4 rounded-l-lg'>
            {ckey ? <AppInfo ckey={ckey}/> : <AppNotFound/>}
            <AppInput/>
        </div>
    )
}