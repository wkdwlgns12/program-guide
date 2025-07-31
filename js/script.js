const container = document.querySelector('#container')
const title = document.querySelector('.title')

const playBtn = document.querySelector('#play')
const stopBtn = document.querySelector('#stop')
let play = setInterval(bgChange, 1000)

function getRandomColor() {
    let hex = "#" + Math.random().toString(16).slice(2, 8)

    return hex
}

function bgChange() {
    let randomColor = getRandomColor()
    container.style.backgroundColor = randomColor
    title.textContent = randomColor

}

stopBtn.addEventListener('click', () => {
    clearInterval(play)
    play = null

})
playBtn.addEventListener('click', () => {
    if (!play) {
        play = setInterval(bgChange, 1000)
    }
})