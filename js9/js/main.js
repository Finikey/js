let body = document.querySelector('body')
let box = document.querySelector('.box')
let box1 = document.querySelector('.box1')
let container = document.querySelector('.container')

function rand(max){
return Math.floor(Math.random()*max);
}
// body.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`

document.addEventListener('keydown', function(event){

    
    if(event.key == 'r'){
        body.style = 'background: red'
        // box.style = 'background: red'
    }
    if(event.key == 'w'){
        box1.style.top = box1.offsetTop - 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 'a'){
        box1.style.left = box1.offsetLeft - 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 'd'){
        box1.style.left = box1.offsetLeft + 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 's'){
        box1.style.top = box1.offsetTop + 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }

    if(event.key == 'ArrowUp'){
        box1.style.top = box1.offsetTop - 6 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(17, 255, 0)`
    }
    if(event.key == 'ArrowLeft'){
        box1.style.left = box1.offsetLeft - 6 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(139, 19, 19)`
    }
    if(event.key == 'ArrowRight'){
        box1.style.left = box1.offsetLeft + 6 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(28, 139, 19)`
    }
    if(event.key == 'ArrowDown'){
        box1.style.top = box1.offsetTop + 6 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(43, 19, 1390)`
    }




    

})


