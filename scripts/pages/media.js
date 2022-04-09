async function getMedias(photographerId) {
    // TODO : Replace with data from the JSON file
	// const url = "https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json";
	// const reponse = await fetch(url,{ method: "GET" }).json();
    // Return medias array only once

	// async function getPhotographers() {
	
	// 	let photographers = [];
	// 		await fetch ('https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json')
	// 		.then(res => res.json())
	// 		.then(data => photographers = data.photographers)
	// 		console.log(photographers);

	// 	return ({
	// 		photographers: [...photographers]})
		
	// };

	let allMedias = [];
        await fetch ('https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json')
        .then(res => res.json())
        .then(data => allMedias = data.media)
        console.log(allMedias);
	const photographerMedia = {
		medias: [...allMedias.filter(media => media.photographerId === parseInt(photographerId))]
	};
	console.log(photographerMedia);
    return (photographerMedia);
}

async function displayMediaData(medias) {
    const mediasSection = document.querySelector("#photographer_gallery");

    medias.forEach((media, index) => {
        const mediaModel = mediaFactory(media);
        const userGalleryDOM = mediaModel.getGalleryCardDOM(index);
        mediasSection.appendChild(userGalleryDOM);
    });
};

async function init() {
    // Retreive photographer photos data
	const id = document.location.href.split("=")[1];
    const { medias } = await getMedias(id);
    displayMediaData(medias);
	sessionStorage.setItem("medias", JSON.stringify(medias));
};

init();
