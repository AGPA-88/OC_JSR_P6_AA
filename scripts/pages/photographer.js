//Add JavaScript code linked to the photographer.html page
async function getPhotographers() {
  // const url = "https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json";
  // const reponse = await fetch(url,{ method: "GET" }).json();
  // let reponse =await rep.json();
  let photographers = [];
  await fetch("https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));

  // Return medias array only once
  return {
    photographers: [...photographers],
  };
}

async function displayPhotographerData(photographers) {
  const photographersSection = document.querySelector(".photographer_info");
  const id = document.location.href.split("=")[1];
  const photographer = photographers.find((ptg) => ptg.id === parseInt(id));

  const photographerModel = photographerFactory(photographer);
  const userCardDOM = photographerModel.getUserPageDOM();
  console.log(userCardDOM);
  // photographersSection.appendChild(userCardDOM);
  document.querySelector("#contact_name").innerHTML = photographer.name;
}

async function init() {
  // Retreive photographer data
  const { photographers } = await getPhotographers();
  displayPhotographerData(photographers);
  //document.querySelectorAll('.photographer_section article p:nth-of-type(1)').forEach(elm => elm.innerHTML = 'Location: ' + elm.innerText);
}

init();
