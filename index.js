var card = document.getElementById("cardContent");
var arrowUp = document.getElementById("arrowUp");
var arrowDown = document.getElementById("arrowDown");
var description = [{

    text: `<div class="card">
    <img class="card__photo" src="./img/testimonial/Mike-img.svg">
    <p class="text-md font-medium">“On the Windows talking painted
      pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
    <h5 class="h3 font-semi_bold color-faded_blue margin-100 ">Mike Taylor</p>
      <h5 class="text-sm font-medium">Lahore, Pakistan</p>
    </div>
</div>`
  }, {
    text: `<div class="card">
  <img class="card__photo" src="./img/testimonial/Mike-img.svg">
  <p class="text-md font-medium">“Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard.”</p>
  <h5 class="h3 font-semi_bold color-faded_blue margin-100 ">Patryk Kozielowicz</p>
    <h5 class="text-sm font-medium">Elblag, Poland</p>
  </div>`
  },
  {
    text: `<div class="card">
    <img class="card__photo" src="./img/testimonial/Mike-img.svg">
    <p class="text-md font-medium">“Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle. Został po raz pierwszy użyty w XV w.”</p>
    <h5 class=" h3 font-semi_bold color-faded_blue margin-100 ">Tomasz Feszter</p>
      <h5 class="text-sm font-medium">Malbork, Poland</p>
    </div>`
  }
]

function checkingArrow() {
  if (i < 0) {
    i = description.length - 1;
    arrowDown.disabled = true;
  }
  if (i >= description.length) {
    i = 0;
    arrowUp.disabled = true;
  }
}

let i = 0;

function removingColor() {
  document.querySelectorAll('span.dot').forEach(e => {
    e.classList.remove('dot--checked');
  })
}

Array.from(document.querySelectorAll('span.dot')).forEach((el, current) => {
  el.preventDefault;
  el.addEventListener("click", e => {
    removingColor();
    el.classList.add('dot--checked');
    card.innerHTML = `${description[current].text}`;
  })
})
card.innerHTML = `${description[i].text}`;

arrowUp.addEventListener("click", e => {
  e.preventDefault;
  i--;
  checkingArrow();
  card.innerHTML = `${description[i].text}`;
});

arrowDown.addEventListener("click", e => {
  e.preventDefault;
  i++;
  checkingArrow();
  card.innerHTML = `${description[i].text}`;
});