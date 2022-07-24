//Add JavaScript code linked to the photographer.html page
async function getPhotographers() {
  let photographers = [];
  await fetch("https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));

  // Return medias array only once
  return {
    photographers: [...photographers],
  };
}

/**
 * The function is called displayPhotographerData and it takes in an array of photographers. It then
 * finds the photographer with the id that matches the id in the url and then creates a
 * photographerModel object from the photographerFactory function and then creates a userCardDOM object
 * from the getUserPageDOM function and then it sets the innerHTML of the element with the id of
 * contact_name to the name of the photographer.
 * @param photographers - an array of objects
 */
async function displayPhotographerData(photographers) {
  const photographersSection = document.querySelector(".photographer_info");
  const id = document.location.href.split("=")[1];
  const photographer = photographers.find((ptg) => ptg.id === parseInt(id));

  const photographerModel = photographerFactory(photographer);
  const userCardDOM = photographerModel.getUserPageDOM();
  document.querySelector("#contact_name").innerHTML = photographer.name;
}



/**
 * Retrieve photographer data, then display it.
 */
async function init() {
  // Retreive photographer data
  const { photographers } = await getPhotographers();
  displayPhotographerData(photographers);
}

init();
