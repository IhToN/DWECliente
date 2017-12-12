// 5
$('ol li:first-child').hide(1500);
// 6
$('ul li:first-child').hide(1500);

// 8
$('.new .text').css('font-size', '.9em');
$('.new .title').click(function () {
    $(this).siblings('.text').toggle(100);
});
$('.new').hover(function () {
    $(this).css('background-color', 'gray');
}, function () {
    $(this).css('background-color', 'transparent');
});