document.querySelector('[data]').addEventListener('click', function (e) {
    let selling = document.querySelector('.selling');
    selling.scrollIntoView({
        behavior: "smooth"
    });
});