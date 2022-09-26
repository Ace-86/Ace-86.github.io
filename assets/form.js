
const $formName = document.querySelector('#name')




// ---------------------form----------------------
$formName.addEventListener('input', () => {
    $formName.setCustomValidity('');
    $formName.checkValidity();
});

$formName.addEventListener('invalid', () =>{
    if ($formName.value === '') {
            $formName.setCustomValidity('Enter your Name!')
    } else {
            $formName.setCustomValidity(
                    'Usernames can only be lowercase.'
            )
    }
})
