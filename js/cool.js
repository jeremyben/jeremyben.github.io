
// browser update
var $buoop = {
    c:2,
    reminder:24,
    reminderClosed:24,
    l:'fr',
}; 
function $buo_f(){ 
    var e = document.createElement("script"); 
    e.src = "//browser-update.org/update.js"; 
    document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}


//fonctions
function addEvent(el, eventName, eventHandle) {
    if (el == null || typeof(el) == 'undefined') return;
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandle, false);
    } else if (el.attachEvent) {
        el.attachEvent( "on" + eventName, eventHandle);
    } else {
        el["on" + eventName] = eventHandle;
    }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Contrôle taille, position et aspect du background de la salle selon viewport.
var bgff = document.getElementById("bgff");
var bgffContainer = bgff.parentNode;
var bgffHeight = bgff.clientHeight;
var bgffWidth = bgff.getAttribute('width').replace('px', ''); 

var bgclouds = document.getElementById("bgclouds");
var bgcloudsWidth = bgclouds.getAttribute('width').replace('px', ''); 

function resizeBg(){
    if (window.innerHeight >= document.body.scrollHeight){
        bgffContainer.style.position = 'static';
        bgff.style.bottom = 0;
    } else {
        bgffContainer.style.position = '';
        bgff.style.bottom = '';
    }

    if (window.innerWidth <= bgffWidth){
        bgff.setAttribute('preserveAspectRatio', 'xMidYMin slice');
    } else {
        bgff.setAttribute('preserveAspectRatio', 'none');
    }

    if (window.innerWidth <= bgcloudsWidth){
        bgclouds.setAttribute('preserveAspectRatio', 'xMaxYMin slice');
    } else {
        bgclouds.setAttribute('preserveAspectRatio', 'none');
    }
};
resizeBg();
addEvent(window, "resize", resizeBg);


$(document).ready(function() {

// nuages de fond
var bgCloud = $('#patron').detach();
for (var i = 0; i < 8; i++) {
    bgCloud.clone().appendTo('.sky')
    .addClass('bg-cloud-anim-'+ getRandomInt(2,6))
    .css({
        'display' : 'block',
        'font-size' : getRandomInt(3,7) + 'px',
        'top' : getRandomInt(20,70) + '0px',
        'left' : getRandomInt(12,30) + '%'
    });
};

$('#getPortfolio').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate( { scrollTop: $('#portfolio').offset().top }, 700);
  });

$('.choice').on('click', function(event) {
    event.stopImmediatePropagation();
    var that = $(this);
    var parent = that.parent();
    var isOpen = that.data('open');
    var siblings = that.siblings();


    var otherIsOpen = parent.prev().data('open');
    if (otherIsOpen) {
        var other = parent.prev().detach();
        other
            .data('open', false)
            .removeAttr('style').addClass('viewed')
            .find('h3').removeAttr('style').end()
            .find('.project').remove();
    }
   
    // var others = [];
    // $.each(siblings, function(index, sibling) {
    //     others.push($(sibling).data('open'));
    // });
    // var otherIsOpen = $.inArray(true, others);
    // if (otherIsOpen !== -1) {
    //     siblings
    //         .data('open', false)
    //         .removeAttr('style')
    //         .find('h3').removeAttr('style').end()
    //         .find('.project').remove();
    // };

    if (!isOpen) {
        // that.append('<div style="font-size: 2em;">&#10050;</div>');
        that.insertBefore(parent);
        
        siblings.hide();
        that.animate({width: '100%', 'margin-right': '0'},
        600, function() {
            $.ajax({
                url: that.data('url'),
                type: 'GET',
                cache: false
            })
            .done(function(data) {
                console.log(data);
                that.find('h3').animate({"font-size": "2em"}, 600);
                $(data).hide().appendTo(that).slideDown();
                siblings.appendTo(parent).slideDown();
                $(other).hide().appendTo(parent).slideDown();
                that.data('open' , true).css('cursor', 'default');
                $('html, body').animate( { scrollTop: that.offset().top-50 }, 500);
            });
        });
    // } else {
    //     that.data('open', false)
    //         .removeAttr('style').addClass('viewed')
    //         .find('h3').removeAttr('style').end()
    //         .find('.project').remove();
    }
    
    

});



// // enchaînement animations logo
// var logo = $('.name');
// var cloud = $('.cloud');
// logo.addClass('logo-cloud-anim');
// logo.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) {
//     logo
//         .removeClass('logo-cloud-anim')
//         .addClass('hovering-anim')
//         .off();
//     // cloud.addClass('hovering-simple-anim');
// });

// // descend le plateau (pas utile)
// $('.fastfood').height(bgHeight);
// $('#plate').css({
//         'position' : 'absolute',
//         'bottom' : '50px'
//     });

// var vivusCB = function(){
//     var bengg = document.getElementById("bengg");
//     var text = document.getElementById("benggText");
//     bengg.parentNode.removeChild(bengg);
//     text.style.display = 'block';
// };

// new Vivus('bengg', {type: 'delayed', duration: 300}, vivusCB);

var allDoc = document.documentElement.innerHTML;
var allBody = document.body.innerHTML;

$('#responsive').on('click', function(e) {
    e.preventDefault();
    var frame = $('<iframe frameborder="0" style="width:60%; height:100%; overflow:hidden;">');
    $('body').css({'height': '100%', 'overflow': 'hidden', 'background': '#000'});
    $('html').css('height', '100%');
    document.body.innerHTML = "";
    frame.appendTo('body');
    setTimeout( function() {
        var idoc = frame[0].contentWindow.document;
        idoc.open();
        idoc.write(allDoc);
        idoc.close();
    }, 1 );  
});

});

