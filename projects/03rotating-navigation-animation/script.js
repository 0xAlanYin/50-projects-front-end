// 获取 id
const openID = document.getElementById('open')
const closeID = document.getElementById('close')

// 获取 class
const container = document.querySelector('.container')

openID.addEventListener('click', () => container.classList.add('show-nav'))

closeID.addEventListener('click', () => container.classList.remove('show-nav'))