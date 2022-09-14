// create drop down menu
const menuItem = document.querySelector('li')

menuItem.addEventListener('click', e => {
    const pick = e.target
    const elementD = document.createElement('div')
    const elementDrop = document.createElement('div')
    console.log(pick)
    elementD.innerHTML = ''
    pick.appendChild(elementD)
    elementD.appendChild(elementDrop)
    elementDrop.innerHTML = dropTemplate
    
})

const dropTemplate = `<div class="dropdown">
    <li> A </li>
    <li> B </li>
    <li> C </li>
</div>
`


// listsContainer.addEventListener('click', e => {
//     if (e.target.tagName.toLowerCase() === 'li') {
//         selectedListId = e.target.dataset.listId
//         saveAndRender()
//         console.log(selectedListId)
//         listDisplayContainer.style.display = ''
//     }
// })


function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
