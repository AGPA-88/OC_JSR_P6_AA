const lightboxElement = document.querySelector('#lightbox');
const closeLightboxBtn = document.querySelector ('#close_lightbox');
const mediaBox = document.querySelector('#media');
const previousBtn = document.querySelector('#previous_media');
const nextBtn = document.querySelector('#next_media');
const medias = JSON.parse(sessionStorage.getItem("medias"));
console.log(medias);
let indexMedia = 0;
let srcMedia ='';

closeLightboxBtn.addEventListener('click', closeLightbox);
previousBtn.addEventListener('click', previousMedia);
nextBtn.addEventListener('click', nextMedia);

function openLightbox(media, src, index) {
    window.addEventListener("keydown",navigationGallery);
    indexMedia = index;
    let srcMediaFolders = src.split("/");
    srcMedia = '';
    for (let i=0; i<srcMediaFolders.length-1; i++){
        srcMedia+= srcMediaFolders[i] + "/"
    }

    if (media==="image"){
        mediaBox.innerHTML = '<img src="'+ src +'">'
    }
    lightboxElement.style.display = "block";
}
function closeLightbox() {
    lightboxElement.style.display = "none";
}

function reloadLightbox() {
    if (medias[indexMedia].image) {
        openLightbox("image", srcMedia + medias[indexMedia].image, indexMedia);
    }
}

function previousMedia() {
    indexMedia--;
    reloadLightbox();
    console.log(indexMedia)
}

function nextMedia() {
    indexMedia++;
    reloadLightbox();
    console.log(indexMedia)
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