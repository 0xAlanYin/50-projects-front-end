// 选择页面元素
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cricles = document.querySelectorAll('.circle')


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > cricles.length) {
        currentActive = cricles.length
    }

    // console.log(currentActive)
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function  update() {
    cricles.forEach((cricle, index)=> {
        if(index < currentActive) {
            cricle.classList.add('active')
        } else{
            cricle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    
    // console.log(actives.length, cricles.length)
    progress.style.width = ((actives.length -1)/(cricles.length -1)) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === cricles.length) {
        next.disabled = true
    } else{
        prev.disabled = false
        next.disabled = false
    }
}