/**
 * It takes in an object with the properties of title, image, video, photographerId, likes, date, price
 * and returns an object with the same properties and a function called getGalleryCardDOM.
 * @param data - {
 * @returns The function getGalleryCardDOM is being returned.
 */
function mediaFactory(data) {
    const { id, title, image, video, photographerId, likes, date, price } = data;

    // const picture = `assets/photographers/${portrait}`;
    
    function getGalleryCardDOM(index) {
/* Creating a div element and setting the class attribute to gallery_item. */
        const gallery = document.createElement( 'div' );
        gallery.setAttribute ( 'class', 'gallery_item' );
        
        /* Creating a video element and appending it to the gallery div. */
        if(video) {
            const vidPath = `assets/media/${photographerId}/${video}`;

            const vid = document.createElement( 'video' );
            const vidSrc = document.createElement( 'source' );
            
            vid.setAttribute("controls", true);
            vid.setAttribute("track", 'default kind="captions" srclang="en"');
            vid.setAttribute("aria-label", "Video name" + title);
            vidSrc.setAttribute("src", vidPath);
            vidSrc.setAttribute("type", "video/mp4");

            vid.appendChild(vidSrc);
            gallery.appendChild(vid);
            
        /* Creating an image element and appending it to the gallery div. */
        }else{
            const picture = `assets/media/${photographerId}/${image}`;
            
            const img = document.createElement( 'img' );
            img.setAttribute('onclick', 'openLightbox("image", "' + picture + '", "'+ title + '", ' + index +');');
            img.setAttribute("src", picture)
            img.setAttribute("alt", "Picture name " + title)
            img.setAttribute ( 'aria-labelledby', 'media_id_' + id);
            gallery.appendChild(img);
        }

        /* Creating a div element and setting the class attribute to media_description. Then it is
        creating an h2 element and setting the text content to the title. */
        const mediaDescription = document.createElement ( 'div' );
        mediaDescription.setAttribute ( 'class', 'media_description' );
        const h2 = document.createElement( 'h2' );
        h2.setAttribute ( 'id', 'media_id_' + id);
        h2.textContent = title;

        /* Creating a div element and setting the class attribute to likes_container. Then it is
        creating a div element and setting the text content to the likes. */
        let likesCount = likes;
        const likesContainer = document.createElement ( 'div' );
        likesContainer.setAttribute ( 'class', 'likes_container' );
        const p_likes = document.createElement( 'div' );
        p_likes.textContent = likes;

    /* Creating a div element and setting the innerHTML to a heart icon. */
        const likeBtn = document.createElement( 'div' );
        // likeBtn.setAttribute('aria-label', 'like this media')
        likeBtn.innerHTML = '<span class="fa fa-heart" aria-hidden="true"></span>';


    /* Adding an event listener to the like button. When the button is clicked, the likesCount is increased
    by 1 and the p_likes innerText is set to the likesCount. */
        likeBtn.addEventListener('click', () => {
            likesCount++;
            p_likes.innerText = likesCount
            let newTotalLikes = parseInt(sessionStorage.getItem('totalLikes'))+1
            sessionStorage.setItem('totalLikes', newTotalLikes)
            document.querySelector('#profile_likes_total').innerHTML = newTotalLikes
        })

/* Appending the elements to the gallery div. */
        gallery.appendChild(mediaDescription);
        mediaDescription.appendChild(h2);
        mediaDescription.appendChild(likesContainer);
        likesContainer.appendChild(p_likes);
        likesContainer.appendChild(likeBtn);

        return (gallery);
    }

    return { title, image, photographerId, likes, date, price, getGalleryCardDOM }
}