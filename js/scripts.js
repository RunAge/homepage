/*  Copyright 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $("main").hasClass("mascot") ) {
            removeMascot();
        } else if( $(window).width() > mascotMinWidth && ! $("main").hasClass("mascot") ) {
            setMascot(mascot);
        }
    });
}

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

var theme_dir = "themes/" + config.theme;

// Theme setup
$('head').append('<link rel="stylesheet" style="text/css" href="'+theme_dir+'/colors.css" />'); //TODO ensure this gets done as fast as possible to avoid blinking while loading page.
$.getScript(theme_dir+"/mascots.js");

$(document).ready(function(event) {
    //Theme setup
    var mascotEnable    = true;
    var mascotPath      = theme_dir+"/images/mascots/"

    var mascot          = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth  = '750';

    if ( mascotEnable ) {
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }

    // Optional animations disabling
    if(config.no_reflow) {
        $('body').addClass("disableAnimations");
    }

    // Render templates
    var $templates = $('script[type=x-tmpl-mustache]');
    for (var i = 0; i < $templates.length; ++i) {
        var tmpl_script = $templates[i];
        var $target = $(tmpl_script.dataset.targetSelector);
        var tmpl = $(tmpl_script).html();
        $target.html( Mustache.render(tmpl, config.links) );
    }
});
