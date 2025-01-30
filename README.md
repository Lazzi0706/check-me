**Check-Me** небольшое веб-приложение, в котором грубо перенесён концепт Discord бота проекта SS220, предоставляющего статистику пользователя на проекте. Тестовое задание </br>
Имитация происходит за счёт использования собственной БД со случайными "пользователями"

## Запуск

Сервер запускается с помощью server.bat в основной папке проекта, а клиент с помощью client.bat

Проект запускается на следующем адресе [http://localhost:3000](http://localhost:3000). API запросы проходят по 3001 порту

## API

- /user/**ckey** возвращает ответ в формате JSON с информацией по игроку (привязанный discord, первое время захода, последнее время захода и ckey) 
- /user/**ckey**/characters возвращает ответ в формате JSON с информацией по игровым персонажам игрока 
