function game() {
    let len = 16, a = [], lockClick = false
    for(let i = 0; i < len; ++i) 
        a.push(Math.round(Math.random() * 10))
    const game = document.getElementById('game')
    a.forEach(function(value) {
         let card = document.createElement('div')
         card.classList.add('card')
         card.classList.add('flipped')
         card.setAttribute('data-num', value)
         card.addEventListener('click', function(e) {
             if(!lockClick) {
                flip(e.target.parentNode)
                check()
             }
         })
         let frontface = document.createElement('img')
         frontface.setAttribute('src', './img.jpg')
         frontface.classList.add('frontface')
         card.append(frontface)
         let backface = document.createElement('div')
         backface.setAttribute('class', 'backface')
         backface.innerHTML = value 
         card.append(backface)
         game.append(card)
         setTimeout(function() {
             card.classList.remove('flipped')
         }, 1000)
    })
}

function flip(e) {
    e.classList.add('flipped')
}

function check() {
    let elements = document.querySelectorAll('.flipped')
    if(elements.length == 2) {
        lockClick = true
        if(elements[0].dataset.num !== elements[1].dataset.num) {
            setTimeout(() => {
                elements.forEach(function(e) {
                    e.classList.remove('flipped')
                })
            }, 1000);
        } else {
            elements.forEach(function(e) {
                e.classList.remove('flipped')
                e.classList.add('done')
            })
        }
        lockClick = false 
     }
}

game()
