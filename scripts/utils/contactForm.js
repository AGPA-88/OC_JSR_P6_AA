/**
 * When the user clicks the button, the modal will appear.
 */
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
}

/**
 * When the user clicks the close button, the modal will be hidden.
 */
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

/* Selecting the form element inside the modal. */
const form = document.querySelector("#contact_modal form");

/* Preventing the default action of the form from happening. It is also creating a new FormData object
and then iterating over the entries of the form data and creating a new object with the key and
value of the form data. */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  let data = {};
  for (const [key, value] of formData.entries()) {
    data = { ...data, [key]: value };
  }
  console.log(data);
});
