// From: http://jsfiddle.net/dizel3d/1eamwt4e/
$(document).on('click', 'a[href^="#what-we-do"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $("#what-we-do").offset().top;
    $('body, html').animate({scrollTop: pos});
});

$(document).on('click', 'a[href^="#marketing"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $("#marketing").offset().top -32;
    $('body, html').animate({scrollTop: pos});
});

$(document).on('click', 'a[href^="#about"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $("#about").offset().top -64;
    $('body, html').animate({scrollTop: pos});
});

$(document).on('click', 'a[href^="#case-studies"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $("#case-studies").offset().top -112;
    $('body, html').animate({scrollTop: pos});
});

$(document).on('click', 'a[href^="#contact"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $("#contact").offset().top -32;
    $('body, html').animate({scrollTop: pos});
});






