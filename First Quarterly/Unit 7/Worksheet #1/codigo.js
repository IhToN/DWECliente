// 5
$('ol li:first-child').hide(1500);
// 6
$('ul li:first-child').hide(1500);

// 8
$('.new .text').css({'font-size': '.9em', 'font-family': 'sans-serif'});
$('.new .title').click(function () {
    $(this).siblings('.text').toggle(1000);
});
$('.new').hover(function () {
    $(this).css('background-color', 'gray');
}, function () {
    $(this).css('background-color', 'transparent');
});