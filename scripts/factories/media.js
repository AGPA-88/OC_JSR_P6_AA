function mediaFactory(data) {
    const { title, image } = data;

    const picture = `assets/media/Marcel/${image}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { title, image, getUserCardDOM }
}