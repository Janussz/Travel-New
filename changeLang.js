const dropdownEl = Array.from(document.querySelectorAll('.dropdown__element'));
const dropdownBtn = document.querySelector('.dropdown--btn');
const dropdownList = document.querySelector('.dropdown');
const dropdownArrow = document.querySelector('.arrow-down');

dropdownBtn.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown--active');
    dropdownArrow.classList.toggle('arrow-rotate');
})

dropdownEl.forEach(lang => {
    lang.addEventListener('click', function () {
        const currentLang = document.querySelector('.dropdown--btn');
        const currentLangName = currentLang.outerText;
        currentLang.innerHTML = lang.outerText;
        lang.innerHTML = currentLangName;
        dropdownList.classList.toggle('dropdown--active');
        dropdownArrow.classList.toggle('arrow-rotate');
    })
})