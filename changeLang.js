const dropdownEl = Array.from(document.querySelectorAll('.dropdown__element'));

dropdownEl.forEach(lang => {
    lang.addEventListener('click', function () {
        const currentLang = document.querySelector('.dropdown--hover');
        const currentLangName = currentLang.outerText;
        currentLang.innerHTML = lang.outerText;
        lang.innerHTML = currentLangName;
    })
})