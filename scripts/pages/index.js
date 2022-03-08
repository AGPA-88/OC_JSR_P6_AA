    async function getPhotographers() {
        // TODO : Replace with data from the JSON file
        let photographers = [];
        await fetch ('http://localhost:5501/data/photographers.json')
        .then(res => res.json())
        .then(data => photographers = data.photographers)
        console.log(photographers);
        // Return photographer array only once
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    