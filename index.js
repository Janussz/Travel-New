const card = document.getElementById("cardContent");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");
const allDots = document.querySelectorAll('span.dot');
const description = [{
    text: `<div class="card">
    <img class="card__photo" src="./img/testimonial/Mike-img.svg">
    <p class="text-md-3 font-medium">“On the Windows talking painted
      pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
    <h5 class="h3 font-semi_bold color-faded_blue margin-100 ">Mike Taylor</p>
      <h5 class="text-sm font-medium">Lahore, Pakistan</p>
    </div>
</div>`
  }, {
    text: `<div class="card">
  <img class="card__photo" src="./img/testimonial/Mike-img.svg">
  <p class="text-md-3 font-medium">“Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard.”</p>
  <h5 class="h3 font-semi_bold color-faded_blue margin-100 ">Patryk Kozielowicz</p>
    <h5 class="text-sm font-medium">Elblag, Poland</p>
  </div>`
  },
  {
    text: `<div class="card">
    <img class="card__photo" src="./img/testimonial/Mike-img.svg">
    <p class="text-md-3 font-medium">“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle. Został po raz pierwszy użyty w XV w.”</p>
    <h5 class=" h3 font-semi_bold color-faded_blue margin-100 ">Tomasz Feszter</p>
      <h5 class="text-sm font-medium">Braniewo, Poland</p>
    </div>`
  }
]

let current = 0;

function checkingArrow(current) {
  if (current < 0) {
    current = description.length - 1;
  }
  if (current >= description.length) {
    current = 0;
  }
  return current;
}

function removingColor() {
  allDots.forEach(e => {
    e.classList.remove('dot--checked');
  })
}

function changingTextField(current) {
  removingColor();
  checkingArrow(current);
  Array.from(allDots)[current].classList.add('dot--checked');
  card.innerHTML = `${description[current].text}`;
}

Array.from(allDots).forEach((el, current) => {
  el.addEventListener("click", e => {
    changingTextField(current);
    return current;
  })
})

card.innerHTML = `${description[current].text}`;

arrowUp.addEventListener("click", e => {
  e.preventDefault;
  current--;
  changingTextField(current);
});

arrowDown.addEventListener("click", e => {
  e.preventDefault;
  current++;
  changingTextField(current);
});