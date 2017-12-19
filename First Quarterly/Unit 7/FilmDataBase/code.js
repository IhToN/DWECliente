let pageToSearch;
let lookingFor;
let end;

function getMovies() {
    let terms = $('#terms').val();
    let type = $('#type').val();
    pageToSearch = 1;
    lookingFor = false;
    end = false;
    printMovies(terms, type, true);

    let win = $(window);
    win.scroll(function () {
        // End of the document reached?
        if ($(document).height() - win.height() - 150 <= win.scrollTop()) {
            printMovies(terms, type, false);
        }
    });
}

function printMovies(terms, type, clear = false) {
    if (lookingFor || end) return;

    lookingFor = true;
    $('.loading').show();

    $.ajax({
        url: "http://www.omdbapi.com/",
        method: "get",
        data: {"s": terms, "apikey": "91b35794", "type": type, "r": "json", "page": pageToSearch,},
        dataType: "json",
        success: function (data) {
            ++pageToSearch;
            styleMovies(data, clear);
            $('.loading').hide();
            lookingFor = false;
        }
    });
}

function styleMovies(jsonSearch, clear = false) {
    if (clear) $('#results').empty();
    if (jsonSearch['Search']) {
        jsonSearch['Search'].forEach((element) => {
            let eleBox = $(`<a class="element" href="http://www.imdb.com/title/${element['imdbID']}/"></a>`)
                .append($('<div class="text"></div>')
                    .append($(`<div class="title">${element['Title']} <span class="year">(${element['Year']})</span></div>`))
                );

            if (element['Poster'] !== 'N/A') eleBox.append($(`<div class="img"><img src="${element['Poster']}" /></div>`));
            else eleBox.append($('<div class="img"><img src="http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg" /></div>'));
            $('#results').append(eleBox);
        });
    } else {
        end = true;
    }
}

window.addEventListener("load", () => {
    $('#terms').keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
            getMovies();
        }
    });
});