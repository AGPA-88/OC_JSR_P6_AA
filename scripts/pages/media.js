async function getMedias() {
    // TODO : Replace with data from the JSON file
    const medias = [
        {
			"id": 52343416,
			"photographerId": 195,
			"title": "Japanese Tower, Kyoto",
			"image": "Travel_Tower.jpg",
			"likes": 25,
			"date": "2019-04-03",
			"price": 60
		},
		{
			"id": 2523434,
			"photographerId": 195,
			"title": "Senset on Canals, Venice",
			"image": "Travel_SunsetonCanals.jpg",
			"likes": 53,
			"date": "2019-05-06",
			"price": 60
		}
    ]
    // Return medias array only once
    return ({
        medias: [...medias]})
}

async function displayData(medias) {
    const mediasSection = document.querySelector(".media_section");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const userCardDOM = mediaModel.getUserCardDOM();
        mediasSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Retreive photographer data
    const { medias } = await getMedias();
    displayData(medias);

};

init();
