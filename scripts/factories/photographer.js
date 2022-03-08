function photographerFactory(data) {
    const {name, id, portrait, city, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("onclick", "document.location.href='/photographer.html?id="+id+"'")
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p_city = document.createElement( 'p' );
        p_city.textContent = city;
        const p_tag = document.createElement( 'p' );
        p_tag.textContent = tagline;
        const p_price = document.createElement( 'p' );
        p_price.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p_city);
        article.appendChild(p_tag);
        article.appendChild(p_price);


        // return `
        //     <article>
        //         <img src="${picture}">
        //         <h2>${name}</h2>
        //         <p>${city}</p>
        //         <p>${tagline}</p>
        //         <p>${price}</p>
        //     </article>
        //     ` 
        
        return (article);
    }
    function getUserPageDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p_city = document.createElement( 'p' );
        p_city.textContent = city;
        const p_tag = document.createElement( 'p' );
        p_tag.textContent = tagline;
        const p_price = document.createElement( 'p' );
        p_price.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p_city);
        article.appendChild(p_tag);
        article.appendChild(p_price);

        return (article);
    }


    return {name, id, picture, city, tagline, price, getUserCardDOM, getUserPageDOM}
}