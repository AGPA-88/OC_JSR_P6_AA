const lightboxElement = document.querySelector('#lightbox');
const closeLightboxBtn = document.querySelector ('#close_lightbox');
const mediaBox = document.querySelector('#media');
const mediaTitle = document.querySelector('#media_title');
const previousBtn = document.querySelector('#previous_media');
const nextBtn = document.querySelector('#next_media');
const medias = JSON.parse(sessionStorage.getItem("medias"));

console.log(medias);
let indexMedia = 0;
let srcMedia ='';

closeLightboxBtn.addEventListener('click', closeLightbox);
previousBtn.addEventListener('click', previousMedia);
nextBtn.addEventListener('click', nextMedia);

function openLightbox(media, src, title, index) {
    document.body.classList.add('lightbox-open');
    window.addEventListener("keydown",navigationGallery);
    indexMedia = index;
    let srcMediaFolders = src.split("/");
    srcMedia = '';
    for (let i=0; i<srcMediaFolders.length-1; i++){
        srcMedia+= srcMediaFolders[i] + "/"
    }

    if (media==="image"){
        mediaBox.innerHTML = '<img src="'+ src +'">'
    }else{
        mediaBox.innerHTML = `
        <video controls="true" autoplay><source src="${src}" type="video/mp4"></video>
        `
    }
    mediaTitle.innerHTML = title;

/* Showing the lightbox. */
    lightboxElement.style.display = "block";
}

/* When the user clicks on the lightbox, close it. */
function closeLightbox() {
    lightboxElement.style.display = "none";
    document.body.classList.remove('lightbox-open');
}

function reloadLightbox() {
    console.log({media: medias[indexMedia], indexMedia})
    if (medias[indexMedia].image) {
        openLightbox("image", srcMedia + medias[indexMedia].image, medias[indexMedia].title, indexMedia);
    }else{
        openLightbox("video", srcMedia + medias[indexMedia].video, medias[indexMedia].title, indexMedia);
    }
}

function previousMedia() {
    console.log({medias:0, indexMedia: indexMedia})
    if(indexMedia <= 0) {
        indexMedia = medias.length -1;
    }else{
        indexMedia--;
    }

    reloadLightbox();

}

function nextMedia() {
    if(medias.length === (indexMedia + 1)) {
        indexMedia = 0;
    }else{
        indexMedia++;
    }
    reloadLightbox();
}

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