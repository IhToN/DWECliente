// 5
$('ol li:first-child').hide(1500);
// 6
$('ul li:first-child').hide(1500);

// 8
$('.new .text').css('font-size', '.9em');
$('.new .title').click(function () {
    var text = $(this).siblings('.text');

    if (text.is(':hidden')) text.show(1500);
    else text.hide(1500);
});
$('.new').hover(function () {
    $(this).css('background-color', 'gray');
}, function () {
    $(this).css('background-color', 'transparent');
});