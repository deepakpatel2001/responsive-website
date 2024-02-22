const hamburger = document.querySelector('.hamburger');
const ulRow = document.querySelector('.ulrow');
hamburger.addEventListener('click', () => {
    ulRow.classList.toggle('ulrowHamburger');
});