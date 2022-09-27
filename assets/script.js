
// create drop down menu
const menuItem = document.querySelector('.project')
const dropDown = document.querySelector('#dropdown')
const $userEmail = document.querySelector('#user_mail')
const $formName = document.querySelector('#name')
let count = 0;

// -------drop-down events-----------
menuItem.addEventListener('click', e => {
        if (count === 0) {
        dropDown.style.display = 'block';
        count++;
        console.log('add')
        } else {
                dropDown.style.display = 'none';
                count--;
        console.log('minus')
        }
})