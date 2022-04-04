function photographerFactory(data) {
  console.log({ data });
  const { name, id, portrait, city, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    let article = document.createElement("article");
    let img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute(
      "onclick",
      "document.location.href='/photographer.html?id=" + id + "'"
    );
    let h2 = document.createElement("h2");
    h2.textContent = name;
    let p_city = document.createElement("p");
    p_city.textContent = city;
    let p_tag = document.createElement("p");
    p_tag.textContent = tagline;
    let p_price = document.createElement("p");
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

    return article;
  }
  function getUserPageDOM() {
    const toto = document.querySelector(".photographer_info");
    console.log(toto);
    let img = document.createElement("img");
    img.setAttribute("src", picture);
    let h2 = document.createElement("h2");
    h2.textContent = name;
    let p_city = document.createElement("p");
    p_city.textContent = city;
    let p_tag = document.createElement("p");
    p_tag.textContent = tagline;

    toto.appendChild(img);
    toto.appendChild(h2);
    toto.appendChild(p_city);
    toto.appendChild(p_tag);

    return toto;
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
