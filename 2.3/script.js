window.addEventListener('load', setPlusIcon);

function setPlusIcon() {
    $('li').has('ul').addClass('list').children('ul').addClass('expandable');
    $('a').on('click', aClick);
}

function aClick(e) {
    var li = e.target.parentElement;
    $(li).children('ul').each(function () {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
}
