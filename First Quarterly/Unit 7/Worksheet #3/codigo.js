let createTable = () => {
    let tableid = '#sixteen';

    let eightrows = '<tr><td></td><td> </td><td> </td><td></td><td></td><td> </td><td> </td><td></td></tr>'.repeat(7);
    $(tableid).find('tbody:last').append(eightrows);
};

let ej1 = () => {
    let tableid = '#sixteen';

    $(tableid + ' tr:nth-child(-n+2) td').css({'background-color': 'red'});
    $(tableid + ' tr:nth-last-child(-n+2) td').css({'background-color': 'blue'});
};

let ej2 = () => {
    let tableid = '#sixteen';

    $(tableid + ' tr td:empty').css({'background-color': 'yellow'});
};

let ej7 = () => {
    let tableid = '#sixteen';

    $(tableid + ' tr td').animate({width: '25'}, 1000).animate({height: '25'}, 1000).animate({width: '50'}, 1000).animate({height: '50'}, 1000);
};

let ej7jump = () => {
    let tableid = '#sixteen';
    $(tableid + ' tr td').dequeue();
};

let ej7clear = () => {
    let tableid = '#sixteen';
    $(tableid + ' tr td').clearQueue();
};


window.onload = () => {
    createTable();

    ej2();
    ej1();
};