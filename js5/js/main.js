let a = prompt('Введите число')
let box = '<div class="box"><a href="https://github.com/Finikey/js"><span class="on">Git<span class="hub">Hub</span></span></a></div>';
let box_list = document.querySelector('.box_list');

for(let i = 0; i < a; i++){
    box_list.insertAdjacentHTML('beforeend',box);
}