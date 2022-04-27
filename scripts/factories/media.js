function mediaFactory(data) {
    const { title, image, video, photographerId, likes, date, price } = data;

    // const picture = `assets/photographers/${portrait}`;
    
    function getGalleryCardDOM(index) {
        console.log(title);
        const gallery = document.createElement( 'div' );
        gallery.setAttribute ( 'class', 'gallery_item' );
        
        if(video) {
            const vidPath = `assets/media/${photographerId}/${video}`;

            const vid = document.createElement( 'video' );
            const vidSrc = document.createElement( 'source' );
            
            vid.setAttribute("controls", true);
            vidSrc.setAttribute("src", vidPath);
            vidSrc.setAttribute("type", "video/mp4");

            vid.appendChild(vidSrc);
            gallery.appendChild(vid);
            
        }else{
            const picture = `assets/media/${photographerId}/${image}`;
            
            const img = document.createElement( 'img' );
            img.setAttribute('onclick', 'openLightbox("image", "' + picture + '", '+ index +');');
            img.setAttribute("src", picture)
            img.setAttribute("alt", title)
            gallery.appendChild(img);
        }
        const mediaDescription = document.createElement ( 'div' );
        mediaDescription.setAttribute ( 'class', 'media_description' );
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;

        let likesCount = likes;
        const likesContainer = document.createElement ( 'div' );
        likesContainer.setAttribute ( 'class', 'likes_container' );
        const p_likes = document.createElement( 'div' );
        p_likes.textContent = likes;

        const likeBtn = document.createElement( 'div' );
        // likeBtn.textContent = '<3';
        likeBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i>';


        likeBtn.addEventListener('click', () => {
            likesCount++;
            p_likes.innerText = likesCount
        })

        gallery.appendChild(mediaDescription);
        mediaDescription.appendChild(h2);
        mediaDescription.appendChild(likesContainer);
        likesContainer.appendChild(p_likes);
        likesContainer.appendChild(likeBtn);

   


        return (gallery);
    }

    return { title, image, photographerId, likes, date, price, getGalleryCardDOM }
}