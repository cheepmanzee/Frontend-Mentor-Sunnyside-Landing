const $burgerBtn = document.getElementById('burger');
const $burgerPopup = document.querySelector('.burger-popup');

$burgerBtn.addEventListener('click', (e) => {
    console.log('click');
    $burgerPopup.classList.toggle('popup');
});