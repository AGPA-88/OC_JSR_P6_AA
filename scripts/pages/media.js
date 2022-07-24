/**
 * It fetches the data from the json file, then filters the data to return only the media that matches
 * the photographerId.
 * @param photographerId - the id of the photographer
 * @returns an object with a key of medias and a value of an array of objects.
 */
async function getMedias(photographerId) {
	let allMedias = [];
        await fetch ('https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json')
        .then(res => res.json())
        .then(data => allMedias = data.media)
	const photographerMedia = {
		medias: [...allMedias.filter(media => media.photographerId === parseInt(photographerId))]
		
	};
    return (photographerMedia);
}

/**
 * It takes an array of media objects, creates a loading div, and then after 2 seconds, it loops
 * through the array and creates a DOM element for each media object.
 * @param medias - an array of objects that contain the media data
 */
async function displayMediaData(medias) {
    const mediasSection = document.querySelector("#photographer_gallery");
	mediasSection.innerHTML = "";
	const loading = document.createElement('div');
	loading.className = "loading";
	loading.innerHTML = 'Loading...';
	mediasSection.appendChild(loading);
	
    setTimeout(() => {
		medias.forEach((media, index) => {
			const mediaModel = mediaFactory(media);
			const userGalleryDOM = mediaModel.getGalleryCardDOM(index);
			mediasSection.appendChild(userGalleryDOM);
			loading.style.display = 'none';
		});
	}, 2000)
};


async function init() {
	/* Getting the id of the photographer from the url. */
	const id = document.location.href.split("=")[1];
    const { medias } = await getMedias(id);
	

	/* Adding the total likes of all the photos together and then displaying it on the page. */
	let totalLikes = 0
	medias.forEach(media => totalLikes += media.likes);
	sessionStorage.setItem('totalLikes', totalLikes);
	document.querySelector('#profile_likes_total').innerHTML = totalLikes;
	document.querySelector('#profile_likes_icon').innerHTML = '<span class="fa fa-heart" aria-hidden="true"></span>';



	let sortedData = medias;


/* Adding an event listener to the div with the class of sortby. When the div is clicked, it toggles
the class of open on the div with the class of dropdown. */
	document.querySelector('.sortby > div').addEventListener('click', (e) => {
		document.querySelector('.sortby .dropdown').classList.toggle('open')
	});

	/* A forEach loop that is looping through all the buttons with the class of sortby. It is then adding
	an event listener to each button. When the button is clicked, it is toggling the class of open on
	the div with the class of dropdown. */
	document.querySelectorAll(".sortby button").forEach((btn, i)  => {
		if(i === 0) btn.parentElement.style.display = 'none';

		btn.addEventListener('click', function(e) {
			document.querySelectorAll(".sortby ul li").forEach(li => li.style.display = 'flex');

			e.target.parentElement.style.display = "none";

			document.querySelector('.sortby .active span').innerText = e.target.dataset.sortby;

			switch (e.target.dataset.sortby) {
				case 'date':
					sortedData = medias.sort((a,b) => {
						const dateA = Number(a.date.replaceAll('-', ''))
						const dateB = Number(b.date.replaceAll('-', ''))
						return dateA - dateB
					})


					break;
				case 'title':
					console.log('title')

					sortedData = medias.sort((a,b) => {
						return a.title.localeCompare(b.title);
						// return a.title - b.title
					});

					break;
			
				default:
					sortedData = medias.sort((b,a) => a.likes - b.likes)
					break;
			}
			displayMediaData(sortedData);
			sessionStorage.setItem("medias", JSON.stringify(sortedData));
		})
	});

/* Setting the sessionStorage to the sortedData. */
	displayMediaData(sortedData);
	sessionStorage.setItem("medias", JSON.stringify(sortedData));



};

init();
