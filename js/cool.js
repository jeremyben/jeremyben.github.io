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

// serialize to json
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

// Randomizer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

// Maintient nuages pour écrans > 1920px
(function(){
  var bgclouds = document.getElementById("bgclouds");
  var bgcloudsWidth = parseInt(bgclouds.getAttribute('width').replace('px', ''), 10);
  var bgcloudsHeight = parseInt(bgclouds.getAttribute('height').replace('px', ''), 10);
  var bgcloudsHeightHD = Math.floor(bgcloudsHeight * 1920 / bgcloudsWidth);
  if (window.innerWidth > 1920){
    bgclouds.setAttribute('preserveAspectRatio', 'none');
    bgclouds.setAttribute('height', bgcloudsHeightHD);
  } else {
    bgclouds.setAttribute('preserveAspectRatio', 'xMaxYMin slice');
    bgclouds.setAttribute('height', bgcloudsHeight);
  }
})()

// nuages de fond
var smallCloud = $('#patron').detach();
for (var i = 0; i < 10; i++) {
  smallCloud
    .clone()
    .appendTo('.sky')
    .addClass('cloud-clone bg-cloud-anim-'+ getRandomInt(2,6))
    .css({
      'display' : 'block',
      'font-size' : getRandomInt(3,7) + 'px',
      'top' : getRandomInt(24,75) + '0px',
      'left' : getRandomInt(12,30) + '%'
    });
}

// Current year
$('#year').text(new Date().getFullYear());

//// Scroll to portfolio
$('#getPortfolio').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 700);
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

  if (!isOpen) {
    that.insertBefore(parent);
    var parentHeight = parent.height();
    parent.height(parentHeight);
    siblings.hide();
    var animTime;
    if (window.innerWidth > 860){
      animTime = 600;
    } else {
      animTime = 0;
    }
    that.animate({width: '100%', 'margin-right': '0'},
      animTime, function() {
        $.ajax({
          url: that.data('url'),
          type: 'GET',
          cache: false
        })
        .done(function(data) {
          that.find('h3').animate({"font-size": "2em"}, 600).siblings('.close-choice').fadeIn(600);
          $(data).hide().appendTo(that).slideDown();
          siblings.appendTo(parent).slideDown();
          $(other).hide().appendTo(parent).slideDown();
          that.data('open' , true).css('cursor', 'default');
          $('html, body').animate( { scrollTop: that.offset().top-50 }, 500);
        });
      });
  }
});

// Ferme projet
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


// modal contact
(function(){
  var modal = $('#contact-modal').plainModal({
    duration: 400,
    overlay: {fillColor: '#b0dcff', opacity: 0.5},
    effect: {open: $.fn.slideDown, close: $.fn.slideUp}
  });
  $('#contact').on('click', function(e) {
      e.preventDefault();
      modal.plainModal('open');
  });
})()

// Gestion envoi formulaire contact
$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    var that = $(this);
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
                that.html(msg);
                that.children().width(fWidth);
                that.slideToggle();
                next();
            })
            .queue('steps', function(next){
                $('#contact').addClass('disabled').text('Merci !').fadeToggle();
                next();
            })
            .delay(2250, 'steps')
            .queue('steps', function(next){
                modal.plainModal('close');
                next();
            })
            .dequeue('steps');
    })
    .fail(function() {
        console.log("error");
    });   
});


// iframe responsive experience
$('#sun').on('click', function(e){
    e.preventDefault();
    var $body = $('body');
    $('.cloud-clone').remove();
    $('.plainmodal-overlay').remove();
    $body.addClass('transition');
    var allDoc = document.documentElement.innerHTML;
    var allBody = $body.html();
    var frame = $('<iframe frameborder="0" style="width:100%; height:100%; overflow:hidden;">');
    var figure = $('<span style="z-index:10;position:fixed;bottom:0;margin-left:-28px"><img style="max-width:none;" src="img/stickpush.svg"></span>');
    $body.css({'height': '100%', 'overflow': 'hidden', 'background': '#fff787'});
    $('html').css('height', '100%');
    document.body.innerHTML = "";
    frame.appendTo('body');
    setTimeout(function(){
        var idoc = frame[0].contentWindow.document;
        idoc.open();
        idoc.write(allDoc);
        idoc.close();
        figure.appendTo('body');
        $body.css('background', 'url("img/circuit.svg") #333 center right / auto 100% repeat-x fixed');
    }, 1);
    frame.animate({width: "400px"}, 3000, function(){
        figure.css('margin-left', 0).find('img').prop('src', 'img/stickstand.svg');
        setTimeout(function(){
            frame.animate({width: "100%"}, 3000, function(){
                $('body').html(allBody).removeAttr('style').removeClass('transition');
                $('html').removeAttr('style');
                smallCloud.appendTo('.sky');
                $.getScript('js/cool.js');
            });
        }, 400);
    });
});

});
