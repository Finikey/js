// let a = prompt('Введите число')
// let box = '<div class="box"><img class="img" src="./img/Без названия.jpg" alt=""></div>';
// let box_list = document.querySelector('.box_list');

// for(let i = 0; i < a; i++){
//     box_list.insertAdjacentHTML('beforeend',box);
// }


let news = [
    {
        id:1,
        name: 'Булкин купил "арбузик"',
        author: 'news',
        date:'31.08.2023',
        text:'Известный блоггер купил новую BMW M3 TOURING'
    },
    {
        id:2,
        name: 'Едем за машиной',
        author: 'Arthur',
        date:'21.08.23',
        text:'Завтра выезжаем за новой машиной'
    },
    {
        id:3,
        name: 'Завтрашняя новость',
        author: 'ман',
        date:'05.02.2022',
        text:'поплыли'
    },
    {
        id:4,
        name: 'Я купил ноутбук',
        author: 'Егор',
        date:'09.09.2023',
        text:'поздравляем'
    },
    {
        id:5,
        name: 'Просто новость',
        author: 'Автор автора',
        date:'01.01.2023',
        text:'просто для простоты'
    }
    ]
    
    newsPlace = document.querySelector('.box_list')
    news.forEach(element => {
    html = `
    <div class="news_card">
    <div class="namedate">
    <h3>${element.name}</h3>
    <p class="opasitytext">${element.date}</p>
    </div>
    <p>${element.text}</p>
    <div class="namedate">
    <p class="authorname">${element.author}</p>
    <p class="opasitytext">id:${element.id}</p>
    </div>
    </div>
    `
    
    newsPlace.innerHTML += html
    })