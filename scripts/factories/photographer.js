function photographerFactory(data) {
  const { name, id, portrait, city, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  /* Creating a DOM element and appending it to the article__a. */
  function getUserCardDOM() {
    let article = document.createElement("article");
    let article__a = document.createElement("a");
    article__a.setAttribute(
      "href",
      "/photographer.html?id=" + id
    );
    let img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute ('aria-label', 'photographer picture');
    let h2 = document.createElement("h2");
    h2.textContent = name;
    let p_city = document.createElement("p");
    p_city.textContent = city;
    let p_tag = document.createElement("p");
    p_tag.textContent = tagline;
    let p_price = document.createElement("p");
    p_price.textContent = price + '€/day';
    article.appendChild(article__a);
    article__a.appendChild(img);
    article__a.appendChild(h2);
    article__a.appendChild(p_city);
    article__a.appendChild(p_tag);
    article__a.appendChild(p_price);

    return article;
  }

  /**
   * It creates a new image element, sets its attributes, and appends it to the photographerPicture
   * element. 
   * 
   * It then creates a new h1 element, sets its attributes, and appends it to the photographerInfo
   * element. 
   * 
   * It then creates two new p elements, sets their attributes, and appends them to the
   * photographerInfo element. 
   * 
   * It then sets the innerHTML of the profile_price element to the value of the price variable. 
   * 
   * It then returns the photographerPicture element.
   * @returns The photographerPicture element.
   */
  function getUserPageDOM() {
    const photographerPicture = document.querySelector('.photographer_picture');
    const photographerInfo = document.querySelector('.photographer_info');

    let img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute ('aria-label', 'photographer picture');
    img.setAttribute ('alt', name + ' Picture');
    let h2 = document.createElement("h1");
    h2.textContent = name;
    h2.setAttribute ('aria-label', 'photographer name');
    let p_city = document.createElement("p");
    p_city.setAttribute ( 'class', 'info_city' )
    p_city.setAttribute ('alt', 'photographer location');
    p_city.textContent = city;
    let p_tag = document.createElement("p");
    p_tag.setAttribute ( 'class', 'info_tagline' )
    p_tag.setAttribute ('alt', 'photographer tag');
    p_tag.textContent = tagline;
    photographerPicture.appendChild(img);
    photographerInfo.appendChild(h2);
    photographerInfo.appendChild(p_city);
    photographerInfo.appendChild(p_tag);

    document.querySelector('#profile_price').innerHTML = price + '€ / day';

    return photographerPicture;
  }

  return {
    name,
    id,
    picture,
    city,
    tagline,
    price,
    photographerFactory,
    getUserCardDOM,
    getUserPageDOM,
  };
}
