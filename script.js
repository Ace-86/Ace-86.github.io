// create drop down menu
const menuItem = document.querySelector('.about')
const dropDown = document.querySelector('#dropdown')
// dropDown.style.display = 'none'

menuItem.addEventListener('click', e => {
        dropDown.style.display = ''; 
        console.log('click')
})
