let links = [];

let creaEnlace = (link, title, domNode) => {
    let linkHTML = $(`<a href="${link}">${title}</a><br/>`);
    let domjq = $(domNode);

    domjq.append(linkHTML);

    let json = {'link': link, 'title': title};
    links.push(json);

    guardarEnlaces();
};

let guardarEnlaces = () => {
    localStorage.clear();
    localStorage.enlacesExamen = JSON.stringify(links);
};

let cargaEnlaces = () => {
    if (localStorage.enlacesExamen)
        for (let link of JSON.parse(localStorage.enlacesExamen))
            creaEnlace(link.link, link.title, document.getElementById('links'));
};

let asociaEventos = () => {
  $('a').hover(function () {
      $(this).css('background-color', 'red');
  }, function () {
      $(this).css('background-color', 'transparent');
  });
};

window.addEventListener("load", () => {
    let linksDomID = '#links';
    cargaEnlaces();
});