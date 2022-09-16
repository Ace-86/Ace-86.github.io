// create drop down menu
const menuItem = document.querySelector('.project')
const dropDown = document.querySelector('#dropdown')

menuItem.addEventListener('mouseover', e => {
        dropDown.style.display = 'block'; 
        console.log('click')
})

menuItem.addEventListener('mouseout', e => {
        dropDown.style.display = 'none';
})