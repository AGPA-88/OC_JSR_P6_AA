function mediaFactory(data) {
    const { title, image, video, photographerId, likes, date, price } = data;

    // const picture = `assets/photographers/${portrait}`;
    
    function getGalleryCardDOM() {
        console.log(title);
        const gallery = document.createElement( 'div' );

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
            img.setAttribute("src", picture)
            img.setAttribute("alt", title)
            gallery.appendChild(img);
        }

        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const p_likes = document.createElement( 'p' );
        p_likes.textContent = likes;
        gallery.appendChild(h2);
        gallery.appendChild(p_likes);

   


        return (gallery);
    }

    
    // function getGalleryDom() {
    //     const gallery = document.querySelector( '#photographer_gallery' );
    //     const article = document.createElement( 'div' );
    //     console.log(gallery);
    //     const img = document.createElement( 'img' );
    //     img.setAttribute("src", picture)
    //     const h2 = document.createElement( 'h2' );
    //     h2.textContent = title;

    //     gallery.appendChild(img);
    //     gallery.appendChild(h2);

    //     return (gallery);

    // }

    return { title, image, photographerId, likes, date, price, getGalleryCardDOM }
}

