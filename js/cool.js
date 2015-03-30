$(document).ready(function() {

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

// // menu
// var menuToggle = $('#js-mobile-menu').unbind();
// $('#js-navigation-menu').removeClass("show");

// menuToggle.on('click', function(e) {
//     e.preventDefault();
//     $('#js-navigation-menu').slideToggle(function(){
//         if($('#js-navigation-menu').is(':hidden')) {
//             $('#js-navigation-menu').removeAttr('style');
//         }
//     });
// });



// Contrôle taille, position et aspect du background de la salle selon viewport.
var bg = document.getElementById("bgff");
var bgContainer = bg.parentNode;
var bgHeight = bg.clientHeight;
var bgWidth = bg.getAttribute('width').replace('px', ''); 
function resizeBg(){
 	if (window.innerHeight >= document.body.scrollHeight){
        bgContainer.style.position = 'static';
        bg.style.bottom = 0;
	} else {
		bgContainer.style.position = '';
        bg.style.bottom = '';
	}

	if (window.innerWidth <= bgWidth){
		bg.setAttribute('preserveAspectRatio', 'xMidYMin slice');
	} else {
		bg.setAttribute('preserveAspectRatio', 'none');
	}
};
resizeBg();
addEvent(window, "resize", resizeBg);

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

// nuages de fond
var bgCloud = $('#patron').detach();
for (var i = 0; i < 10; i++) {
    bgCloud.clone().appendTo('.sky')
    .addClass('bg-cloud-anim-'+ getRandomInt(2,6))
    .css({
        'display' : 'block',
        'font-size' : getRandomInt(3,7) + 'px',
        'top' : getRandomInt(20,100) + '0px',
        'left' : getRandomInt(15,30) + '%'
    });
};

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

});