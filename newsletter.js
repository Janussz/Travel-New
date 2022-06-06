const usersInDatabase = [];
const modal = document.querySelector('.modal');
const showModal = document.querySelector('.show_modal');
const closeModal = document.querySelector('.close_modal');
const textModal = document.querySelector('.modal_text');

showModal.addEventListener("click", function (e) {
  e.preventDefault();
  const inputEmail = document.querySelector('.input__contact').value;
  if (inputEmail) {
    const checkEmail = function (el) {
      modal.classList.remove("hidden");
      if (usersInDatabase.includes(el)) {

        textModal.innerHTML = /*HTML*/ `
        <h3>You are subscribed already</h3>
        <p>Check your mailbox for massage</p>
        `;

      } else {
        usersInDatabase.unshift(el);
        textModal.innerHTML = /*HTML*/ `
        <h3>Thank You for subscribing to newsletter</h3>
        <p>Your email ${el} </p> 
        `;
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
  modal.classList.add("hidden");

});