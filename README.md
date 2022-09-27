# React Music

## Описание

Пет-проект сайт с музыкой с возможностью авторизации. При создании использовались Genius API и локальная база данных MySQL

## Требования

Для запуска данного проекта требуется установка Node.js и MySQL

## Установка

1. Загрузите и установите Node: https://nodejs.org/
2. Клонируйте данный репозиторий: `git clone https://github.com/stoshich/React-Music.git`
3. Установите зависимости проекта: `npm install`
4. Запустите среду разработки: `npm start`
5. Откройте браузер и перейдите <http://localhost:3000>
6. Для запуска сервера авторизации требуется создать базу данных и в файле React-Music/src/back/authorisation/sqlConnection.js указать необходимые настройки для подключения к БД
7. В директории React-Music/src/back/authorisation запустить сервер: `npm run dev`

## Стек использованных технологий

### TypeScript (Frontend часть)

* React
* Redux Toolkit
* Axios

### Node.js (Backend часть, авторизация)

* express
* mysql2
* bcryptjs
* jsonwebtoken

### HTML
### CSS
