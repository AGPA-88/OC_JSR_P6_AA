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
    // Retreive photographer photos data
	const id = document.location.href.split("=")[1];
    const { medias } = await getMedias(id);
	
	// Get total likes
	let totalLikes = 0
	medias.forEach(media => totalLikes += media.likes);
	sessionStorage.setItem('totalLikes', totalLikes);
	document.querySelector('#profile_likes_total').innerHTML = totalLikes;
	document.querySelector('#profile_likes_icon').innerHTML = '<span class="fa fa-heart" aria-hidden="true"></span>';



	let sortedData = medias;


	document.querySelector('.sortby > div').addEventListener('click', (e) => {
		document.querySelector('.sortby .dropdown').classList.toggle('open')
	});

	document.querySelectorAll(".sortby button").forEach((btn, i)  => {
		if(i === 0) btn.parentElement.style.display = 'none';

		btn.addEventListener('click', function(e) {
			console.log({parent: e.target})
			console.log("🚀 ~ file: media.js ~ line 59 ~ btn.addEventListener ~ e.target.dataset.sortby", e.target.dataset.sortby)

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

	displayMediaData(sortedData);
	sessionStorage.setItem("medias", JSON.stringify(sortedData));



};

init();
