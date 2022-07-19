/* Selecting the elements from the HTML page. */
const lightboxElement = document.querySelector('#lightbox');
const closeLightboxBtn = document.querySelector ('#close_lightbox');
const mediaBox = document.querySelector('#media');
const mediaTitle = document.querySelector('#media_title');
const previousBtn = document.querySelector('#previous_media');
const nextBtn = document.querySelector('#next_media');
let medias = [];


/* Declaring two variables. */
let indexMedia = 0;
let srcMedia ='';

/* Adding an event listener to the buttons. */
closeLightboxBtn.addEventListener('click', closeLightbox);
previousBtn.addEventListener('click', previousMedia);
nextBtn.addEventListener('click', nextMedia);

/* A function that is called when the user clicks on a media. It takes four parameters: media, src,
title and index. */
function openLightbox(media, src, title, index) {
    medias = JSON.parse(sessionStorage.getItem("medias"));
    document.body.classList.add('lightbox-open');
    window.addEventListener("keydown",navigationGallery);
    indexMedia = index;
    let srcMediaFolders = src.split("/");
    srcMedia = '';
    for (let i=0; i<srcMediaFolders.length-1; i++){
        srcMedia+= srcMediaFolders[i] + "/"
    }

/* Checking if the media is an image or a video. If it is an image, it will display the image. If it is
a video, it will display the video. */
    if (media==="image"){
        mediaBox.innerHTML = '<img src="'+ src +'">'
    }else{
        mediaBox.innerHTML = `
        <video controls="true" autoplay><source src="${src}" type="video/mp4" ></video>
        `
    }
    /* Setting the title of the media. */
    mediaTitle.innerHTML = title;

/* Showing the lightbox. */
    lightboxElement.style.display = "block";
}

/* When the user clicks on the lightbox, close it. */
function closeLightbox() {
    lightboxElement.style.display = "none";
    document.body.classList.remove('lightbox-open');
}

/**
 * If the media is an image, open the lightbox with the image, title, and indexMedia. If the media is a
 * video, open the lightbox with the video, title, and indexMedia.
 */
function reloadLightbox() {
    if (medias[indexMedia].image) {
        openLightbox("image", srcMedia + medias[indexMedia].image, medias[indexMedia].title, indexMedia);
    }else{
        openLightbox("video", srcMedia + medias[indexMedia].video, medias[indexMedia].title, indexMedia);
    }
}

/**
 * If the indexMedia is less than or equal to 0, then set the indexMedia to the length of the medias
 * array minus 1. Otherwise, subtract 1 from the indexMedia. Then, call the reloadLightbox function.
 */
function previousMedia() {
    if(indexMedia <= 0) {
        indexMedia = medias.length -1;
    }else{
        indexMedia--;
    }

    reloadLightbox();

}

/**
 * If the index of the media is equal to the length of the media array, then reset the index to 0,
 * otherwise increment the index.
 */
function nextMedia() {
    if(medias.length === (indexMedia + 1)) {
        indexMedia = 0;
    }else{
        indexMedia++;
    }
    reloadLightbox();
}

/**
 * If the left arrow key is pressed, call the previousMedia() function. If the right arrow key is
 * pressed, call the nextMedia() function. If the escape key is pressed, call the closeLightbox()
 * function.
 * @param event - the event object
 */
function navigationGallery(event){
    if(event.keyCode === 37){
    previousMedia();
    }
    if(event.keyCode === 39){
    nextMedia();
    }
    if(event.keyCode === 27){
    closeLightbox();
    }
}