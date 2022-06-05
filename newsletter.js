const usersInDatabase = [];
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const showModal = document.querySelector('.show_modal');
const closeModal = document.querySelector('.close_modal');

showModal.addEventListener("click", function (e) {
  e.preventDefault();
  const inputEmail = document.querySelector('.input__contact').value;
  if (inputEmail) {
    const checkEmail = function (el) {

      if (usersInDatabase.includes(el)) {
        modal2.classList.remove("hidden");

        // alert("This email is already subcribed. Check your mailbox");
      } else {
        usersInDatabase.push(el);
        modal1.classList.remove("hidden");
        // alert(`Thank you for subscribing to newsletter with your email: ${el}!`)
      }
    }
    checkEmail(inputEmail);
    console.log(usersInDatabase);
    document.querySelector('.input__contact').value = "";
  } else {
    return null
  }
});

closeModal.addEventListener("click", function () {
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
});