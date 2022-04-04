function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const form = document.querySelector("#contact_modal form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target);

  const formData = new FormData(e.target);
  console.log(formData);

  let data = {};
  for (const [key, value] of formData.entries()) {
    data = { ...data, [key]: value };
  }
  console.log(data);
});
