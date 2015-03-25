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

var bg = document.getElementById("bgff");
var bgHeight = bg.clientHeight;
var bgWidth = bg.getAttribute('width').replace('px', '');

function resizeBg(){
 	if (window.innerHeight >= bgHeight){
		bg.style.height = '100%';
	} else {
		bg.style.height = '';
	}

	if (window.innerWidth <= bgWidth){
		bg.setAttribute('preserveAspectRatio', 'xMidYMin slice');
	} else {
		bg.setAttribute('preserveAspectRatio', 'none');
	}
};
resizeBg();
addEvent(window, "resize", resizeBg);

$('.logo').addClass('myAnim');

});