import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

//import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    //.use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(detector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',

        resources: {
            en: {
                mainPage: {
                    mainTitle: 'About me',
                    cookies: 'DoubleCookies',
                    programmingTitle: 'Programming',
                    programmingIntro: 'My main activity. I\'m Java-developer with 3 years of experience; ' +
                        'familiar with Spring Boot, JUnit, DB (SQL and NoSQL), also I have experience with JS (React, Typescript), HTML and CSS. ' +
                        'I participated in creating new large project and reworking some existing. ',
                    programmingOpenSource: 'Sometimes I make contribution in Open Source — I have my own repositories on GitHub and contribution in other projects.',
                    programmingPreLink: 'More information about me can be found in ',
                    programmingLink: 'this section.',
                    fandomTitle: 'FANDOM',
                    fandomPreLink: 'More details about me you can find *in hobbies*',
                    hobbiesTitle: 'Hobbies',
                    hobbiesLink: 'Photography, FANDOM, chess and other things!',
                    intro: 'Hello! I am DoubleCookies — person who loves programming, eating cookies, check statistics and other things! ' +
                        'More details about me and my activities can be found below.',
                },
                aboutThisPage: {
                    title: 'This page uses following technologies:',
                    antd: 'For most components (menu, pictures, even this popover)',
                    createReactApp: 'Starting point for project',
                    ghPages: 'This page host',
                    i18next: 'For internationalization',
                    reactRouter: 'For navigation',
                    cookie: 'I\'m smart cookie. Know something about it.',
                },
                programmingProject: {
                    title: 'Projects',
                    preIntro: 'There are some repositories ',
                    introLink: 'on my Github-page',
                    intro: ':',
                    GDStatistics: 'Project about collecting statistics from Geometry Dash.',
                    stats4wiki: 'Almost the same as previous but more specific',
                    wikiWamLog: 'WAM rank charts for some wikis',
                    StringSwap: 'Small app for text processing',
                    MazeGeneratorAndSolver: 'Maze generation and solving. Also has rendering for both processes',
                    AssociativeRules: 'Old university project about creating and analysis of associative rules for medical tasks',
                },
                programmingSection: {
                    exp: 'Skills',
                    start: 'I am software engineer with 3+ years experience. During this time I learned and used following technologies:',
                    javaExp: 'Main programming language, used most of the time. Also learned about connected things like:',
                    jsExp: 'Javascript and other stuff (Frameworks, libraries, HTML, CSS). Also used a lot.',
                    otherExp: 'Other',
                    githubStats: 'GitHub Stats',
                },
                hobbiesSection: {
                    photoTitle: 'Photography',
                    photoStart: 'In my free time I like to take photos of nature (usually within the city), but sometimes I experiment with still lifes. ' +
                        'I began to do it in university and I still like it!',
                    photoGallery: 'Here you can see some of my photos:',
                    fandomTitle: 'FANDOM',
                    fandomStart: 'FANDOM is one of the biggest wiki hosting and fan-site in the world. I actively edit on it since 2016. ' +
                        'The main direction is to maintain the technical part of project (templates, CSS, JS, even Lua modules); also I improve articles and write new ones.',
                    fandomVanguard: 'Since 2019 I\'m Vanguard member - team which helps make Fandom\'s content available on the widest possible range of devices.',
                    chessTitle: 'Chess',
                    chessStart: 'I began to play chess at 4 (chess, of course, are more complicated than cars and robots but a way more interesting). ' +
                        'Also I participated in school and university competitions and took 1-3 places as a part of teams.' +
                        'Nowadays I play chess not so often and mostly online.',
                }
            },
            ru: {
                mainPage: {
                    mainTitle: 'Обо мне',
                    cookies: 'DoubleCookies',
                    programmingTitle: 'Программирование',
                    programmingIntro: 'Моё основное занятие. Java-разработчик с 3 годами опыта работы; ' +
                        'знаком с Spring Boot, JUnit, БД (SQL и NoSQL), а также есть опыт работы с JS (React, Typescript), HTML и CSS. ' +
                        'Принимал участие как в создании нового масштабного проекта, так и в доработке ряда уже существующих.',
                    programmingOpenSource: 'Иногда вношу вклад в Open Source — на GitHub работаю над своими проектами и немного помогаю другим.',
                    programmingPreLink: 'Больше информации обо мне можно найти в ',
                    programmingLink: 'соответствующем разделе.',
                    fandomTitle: 'FANDOM',
                    hobbiesTitle: 'Увлечения',
                    hobbiesLink: 'Фотография, FANDOM, шахматы и не только! ',
                    intro: 'Всем привет! С вами DoubleCookies — тот, кто любит программировать, кушать печенье, изучать статистику и не только. ' +
                        'Более подробно обо мне и моей деятельности можно будет прочитать ниже.',
                },
                aboutThisPage: {
                    title: 'Эта страница написана с использованием следующих технологий:',
                    antd: 'Для множества компонентов (меню, изображения, даже это всплывающее окно)',
                    createReactApp: 'Стартовая точка создания',
                    ghPages: 'Место размещение web-страницы',
                    i18next: 'Для поддержки разных языков',
                    reactRouter: 'Для навигации',
                    cookie: 'Я умное печенье. Что-то знаю про всё это.'
                },
                programmingProject: {
                    title: 'Проекты',
                    preIntro: 'На моей ',
                    introLink: 'GitHub-странице ',
                    intro: 'находятся ряд репозиториев с проектами:',
                    GDStatistics: 'Проект, посвящённый сбору статистики из игры Geometry Dash.',
                    stats4wiki: 'Похож на предыдущий проект, но более узконаправленный.',
                    wikiWamLog: 'Графики рейтинга WAM для нескольких википроектов',
                    StringSwap: 'Небольшое приложение для работы с текстом',
                    MazeGeneratorAndSolver: 'Проект по генерации и решения лабиринтов. Присутствует отрисовка всего процесса создания и решения.',
                    AssociativeRules: 'Старый проект, созданный ещё в университете. Позволяет произвести анализ ассоциативных правил в рамках задачи медицинской диагностики.',
                },
                programmingSection: {
                    exp: 'Навыки',
                    start: 'Разработкой программного обеспечения занимаюсь на протяжении уже более трёх лет. За это время успел познакомиться и использовать следующие технологии:',
                    javaExp: '"Основной" язык, на котором программирую большую часть времени. За это время познакомился со следующими технологиями:',
                    jsExp: 'Javascript и прочие связанные с ним вещи. Также активно использую.',
                    otherExp: 'Прочее',
                    githubStats: 'Статистика на GitHub',
                },
                hobbiesSection: {
                    photoTitle: 'Фотография',
                    photoStart: 'В свободное время люблю фотографировать природу (в основном в пределах города), но иногда и экспериментирую с натюрмортами. ' +
                        'Начал увлекаться этим в университете, нравится до сих пор.',
                    photoGallery: 'Ниже можно увидеть некоторые мои фотографии:',
                    fandomTitle: 'FANDOM',
                    fandomStart: 'FANDOM — это один из крупнейших вики-хостингов и сайтов для фанатов. Активно редактирую на нём начиная с ' +
                        '2016 года. Основным направлением является поддержание технической части википроектов (шаблоны, CSS, JS, в редких случаях — Lua); помимо этого ' +
                        'дорабатываю имеющиеся статьи и иногда создаю новые.',
                    fandomVanguard: 'С 2019 года являюсь членом команды Vanguard, которая делает контент ФЭНДОМа доступным для как можно большего количества устройств.',
                    chessTitle: 'Шахматы',
                    chessStart: 'Впервые познакомился с ними в 4 года (шахматы, конечно, сложнее машинок и роботов, но куда интереснее). ' +
                        'Принимал участие в школьных и университетских соревнованиях, есть занимал 1-3 места в составах команд.' +
                        'Сейчас играю не так часто, в основном - онлайн.',
                }
            }
        }
    });

export default i18n;