/**
 * It fetches the JSON file, then returns the array of photographers.
 * @returns An object with a property called photographers that contains an array of photographers.
 */
    async function getPhotographers() {
        // TODO : Replace with data from the JSON file
        let photographers = [];
        await fetch ('https://agpa-88.github.io/OC_JSR_P6_AA/data/photographers.json')
        .then(res => res.json())
        .then(data => photographers = data.photographers)
        // Return photographer array only once
        return ({
            photographers: [...photographers]})
    }

/**
 * The function takes an array of objects, loops through the array, and for each object, it creates a
 * new object using the photographerFactory function, and then it appends the DOM element of the new
 * object to the DOM.
 * @param photographers - an array of objects
 */
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

/**
 * The function `init` is an asynchronous function that retrieves photographer data from the
 * `getPhotographers` function and then displays the data using the `displayData` function.
 */
    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    