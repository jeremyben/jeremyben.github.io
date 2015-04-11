// jQuery Plain Modal
!function(e,t){"use strict";function o(t,o){var n=e.extend(!0,{duration:200,effect:{open:e.fn.fadeIn,close:e.fn.fadeOut},overlay:{opacity:.6,zIndex:9e3},closeClass:z+"-close"},o);return n.overlay.fillColor=n.overlay.fillColor||n.overlay.color||"#888",n.zIndex=n.zIndex||n.overlay.zIndex+1,d||(d=e(window),g=e('<div class="'+z+'-overlay" />').css({position:"fixed",left:0,top:0,width:"100%",height:"150%",display:"none"}).appendTo(p=e("body")).click(r).on("touchmove",function(){return!1}),e(document).focusin(function(t){k&&!k.has(t.target).length&&(h?h.focus():e(document.activeElement).blur())}).keydown(function(e){return k&&27===e.keyCode?r(e):void 0})),t.each(function(){var t=e(this),o={position:"fixed",display:"none",zIndex:n.zIndex};n.offset?"function"==typeof n.offset?n.offset=function(e){return function(){var t=this;return e.call(t,function(){f.call(t)})}}(n.offset):(o.left=n.offset.left,o.top=n.offset.top,o.marginLeft=o.marginTop=""):n.offset=f,n.closeClass&&t.find("."+n.closeClass).off("click",r).click(r),e.each([["open",C],["close",I],["beforeopen",E],["beforeclose",L]],function(e,o){var r=o[0],i=o[1];"function"==typeof n[r]&&t.off(i,n[r]).on(i,n[r])}),t.css(o).data(T,n).appendTo(p).on("touchmove",function(){return!1})})}function n(n,f){var c,z,I,L,D,q=n.length?n.eq(0):t;return a||!q?n:((f||!(c=q.data(T)))&&(c=o(q,f).data(T)),!s&&c.force&&u&&u.get(0)!==q.get(0)&&(u.stop(!0,!0),g.stop(!0,!0)),!s&&c.force&&k&&k.get(0)!==q.get(0)?(s=q,r(k)):null===k&&(a=!0,D=e.Event(E,{cancelable:!0}),q.trigger(D),D.isDefaultPrevented()||(z=p.get(0).style,m=z.overflow,I=p.prop("clientWidth"),L=p.prop("clientHeight"),p.css("overflow","hidden"),I-=p.prop("clientWidth"),L-=p.prop("clientHeight"),y=z.marginRight,x=z.marginBottom,0>I&&p.css("marginRight","+="+-I),0>L&&p.css("marginBottom","+="+-L),v=e(document.activeElement).blur(),h=null,w=d.scrollLeft(),b=d.scrollTop(),d.scroll(l),i(q,c),c.effect.open.call(u=q,c.duration||1,function(){u=t,q.find("a,input,select,textarea,button,object,area,img,map").each(function(){var t=e(this);return t.focus().get(0)===document.activeElement?(h=t,!1):void 0}),k=q,q.trigger(C)}),g.css({backgroundColor:c.overlay.fillColor,zIndex:c.overlay.zIndex}).fadeTo(c.duration,c.overlay.opacity),k=0),a=!1),n)}function r(o){var r,i,f,c,h=o instanceof e.Event;return!a&&k&&(a=!0,r=h?k:function(){var e=o.index(k);return e>-1?o.eq(e):t}(),r&&(f=e.Event(L,{cancelable:!0}),h?f.from=o:s&&(f.from=s),r.trigger(f),f.isDefaultPrevented()?s=t:(i=r.data(T),c=s?1:i.duration||1,i.effect.close.call(u=r,c,function(){var i;u=t,p.css({overflow:m,marginRight:y,marginBottom:x}),v&&v.length&&v.focus(),d.off("scroll",l).scrollLeft(w).scrollTop(b),k=null,i=e.Event(I),h?i.from=o:s&&(i.from=s),r.trigger(i),s&&window.setTimeout(function(){n(s),s=t},0)}),g.fadeOut(c),k=0)),a=!1),h?(o.preventDefault(),!1):o}function i(e,t){var o;t=t||e.data(T),"function"==typeof t.offset&&(o=t.offset.call(e))&&e.css({left:o.left,top:o.top,marginLeft:"",marginTop:""})}function f(){this.css({left:"50%",top:"50%",marginLeft:"-"+this.outerWidth()/2+"px",marginTop:"-"+this.outerHeight()/2+"px"})}function l(e){return d.scrollLeft(w).scrollTop(b),e.preventDefault(),!1}function c(e,n,r){var i,f=e.length?e.eq(0):t;if(f&&(i=f.data(T)||o(f).data(T),i.hasOwnProperty(n)))return null!=r&&(i[n]=r),i[n]}var a,s,u,d,p,g,v,h,m,y,x,w,b,T="plainModal",z=T.toLowerCase(),C=z+"open",I=z+"close",E=z+"beforeopen",L=z+"beforeclose",k=null;e(function(){e(window).resize(function(){k&&i(k)})}),e.fn[T]=function(e,t,i){return"open"===e?n(this,t):"close"===e?r(this):"option"===e?c(this,t,i):o(this,e)}}(jQuery);

/// serialize to json
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

///// browser update
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

//// fonctions utiles
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



//// Contrôle taille, position et aspect des backgrounds svg selon viewport.
var bgff = document.getElementById("bgff");
var bgffContainer = bgff.parentNode;
var bgffHeight = bgff.clientHeight;
var bgffWidth = bgff.getAttribute('width').replace('px', ''); 
var bgclouds = document.getElementById("bgclouds");
var bgcloudsWidth = bgclouds.getAttribute('width').replace('px', ''); 
function resizeBg(){

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

////////// READY ///////////
$(document).ready(function() {

// Année en cours
var year = new Date().getFullYear();
$('#year').text(year);

// nuages de fond
var bgCloud = $('#patron').detach();
for (var i = 0; i < 8; i++) {
    bgCloud.clone().appendTo('.sky')
    .addClass('bg-cloud-anim-'+ getRandomInt(2,6))
    .css({
        'display' : 'block',
        'font-size' : getRandomInt(3,7) + 'px',
        'top' : getRandomInt(24,79) + '0px',
        'left' : getRandomInt(12,30) + '%'
    });
};

//// Scroll to portfolio
$('#getPortfolio').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate( { scrollTop: $('#portfolio').offset().top }, 700);
  });

//// Ouvre projet
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
            .find('.close-choice').hide().end()
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
        var parentHeight = parent.height();
        parent.height(parentHeight);
        siblings.hide();
        if (window.innerWidth > 860){
            var animTime = 600;
        } else {
            var animTime = 0;
        }
        that.animate({width: '100%', 'margin-right': '0'},
        animTime, function() {
            $.ajax({
                url: that.data('url'),
                type: 'GET',
                cache: false
            })
            .done(function(data) {
                console.log(data);
                that.find('h3').animate({"font-size": "2em"}, 600).siblings('.close-choice').fadeIn(600);
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

$('.close-choice').on('click', function(event){
    event.stopImmediatePropagation();
    var that = $(this);
    var parent = $('.choices');
    parent.height('');
    var choice = that.closest('.choice').detach();
    that.hide();
    choice.data('open', false)
        .removeAttr('style').addClass('viewed')
        .find('h3').removeAttr('style').end()
        .find('.project').remove().end()
        .hide().appendTo(parent).slideDown();
});


////// modal contact

var modal = $('#contact-modal').plainModal({
    duration: 400,
    overlay: {fillColor: '#b0dcff', opacity: 0.5},
    effect: {open: $.fn.slideDown, close: $.fn.slideUp}
});
$('#contact').on('click', function(e) {
    e.preventDefault();
    modal.plainModal('open');
});


////// Gestion envoi formulaire contact
$('#contact-form').on('submit', function(event) {
    event.preventDefault();
    var that = $(this);
    // var btnWidth = that.find('[input type="submit"]').width();
    that.find('input[type="submit"]').prop('disabled', true);
    $.ajax({
        url: that.attr('action'),
        type: that.attr('method'),
        data: that.serializeObject(),
        dataType: 'json'
    })
    .done(function() {
        var fWidth = that.width();
        that
            .queue('steps', function(next){
                that.slideToggle();
                $('#contact').fadeToggle();
                next();
            })
            .delay(400, 'steps')
            .queue('steps', function(next){
                var msg = '<h4 style="text-align:center">Reçu !</h4>';
                msg += '<p style="text-align:center">Je suis déjà en train de répondre ;)</p>';
                // msg += '<p><i class="anim-rotate" style ="font-size:32px"></i></p>';
                that.html(msg);
                that.children().width(fWidth);
                that.slideToggle();
                // that.children().unwrap();
                next();
            })
            .queue('steps', function(next){
                $('#contact').addClass('disabled').text('Merci !').fadeToggle();
                next();
            })
            .delay(2250, 'steps')
            .queue('steps', function(next){
                modal.plainModal('close');
                // that.children().width('');
                next();
            })
            .dequeue('steps');
    })
    .fail(function() {
        console.log("error");
    });   
});



/////////// enchaînement animations logo
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


// var vivusCB = function(){
//     var bengg = document.getElementById("bengg");
//     var text = document.getElementById("benggText");
//     bengg.parentNode.removeChild(bengg);
//     text.style.display = 'block';
// };
// new Vivus('bengg', {type: 'delayed', duration: 300}, vivusCB);


///////// iframe responsive experience

// var allDoc = document.documentElement.innerHTML;
// var allBody = document.body.innerHTML;
// $('#responsive').on('click', function(e) {
//     e.preventDefault();
//     var frame = $('<iframe frameborder="0" style="width:60%; height:100%; overflow:hidden;">');
//     $('body').css({'height': '100%', 'overflow': 'hidden', 'background': '#000'});
//     $('html').css('height', '100%');
//     document.body.innerHTML = "";
//     frame.appendTo('body');
//     setTimeout( function() {
//         var idoc = frame[0].contentWindow.document;
//         idoc.open();
//         idoc.write(allDoc);
//         idoc.close();
//     }, 1 );  
// });


});

