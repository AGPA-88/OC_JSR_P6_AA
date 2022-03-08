//Add JavaScript code linked to the photographer.html page
async function getPhotographers() {
    const photographers = [
        {
			"name": "Mimi Keel",
			"id": 243,
			"city": "London",
			"country": "UK",
			"tagline": "See the beauty of daily moments",
			"price": 400,
			"portrait": "MimiKeel.jpg"
		},
		{
			"name": "Ellie-Rose Wilkens",
			"id": 930,
			"city": "Paris",
			"country": "France",
			"tagline": "Capture complexe compositions",
			"price": 250,
			"portrait": "EllieRoseWilkens.jpg"
		},
		{
			"name": "Tracy Galindo",
			"id": 82,
			"city": "Montreal",
			"country": "Canada",
			"tagline": "Freelance photographer",
			"price": 500,
			"portrait": "TracyGalindo.jpg"
		},
		{
			"name": "Nabeel Bradford",
			"id": 527,
			"city": "Mexico City",
			"country": "Mexico",
			"tagline": "Always produce better photography",
			"price": 350,
			"portrait": "NabeelBradford.jpg"
		},
		{
			"name": "Rhode Dubois",
			"id": 925,
			"city": "Barcelona",
			"country": "Spain",
			"tagline": "Memory factory",
			"price": 275,
			"portrait": "RhodeDubois.jpg"
		},
		{
			"name": "Marcel Nikolic",
			"id": 195,
			"city": "Berlin",
			"country": "Germany",
			"tagline": "Eternal pusrsuit of the one great photo",
			"price": 300,
			"portrait": "MarcelNikolic.jpg"
		}
    ]
    // Return medias array only once
    return ({
        photographers: [...photographers]})
	
};

async function displayData(photographers) {
    const photographersSection = document.querySelector("#photographer_section");
	const id = document.location.href.split("=")[1];
	const photographer = photographers.find(ptg=>ptg.id===parseInt(id));

	const photographerModel = photographerFactory(photographer);
	const userCardDOM = photographerModel.getUserPageDOM();
	console.log(userCardDOM);
	photographersSection.appendChild(userCardDOM);
};

async function init() {
    // Retreive photographer data
    const { photographers } = await getPhotographers();
    displayData(photographers);
	//document.querySelectorAll('.photographer_section article p:nth-of-type(1)').forEach(elm => elm.innerHTML = 'Location: ' + elm.innerText);

};

init();
