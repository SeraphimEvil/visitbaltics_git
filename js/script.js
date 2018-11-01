(function () {

  var offset = Math.floor(window.innerHeight / 4);

  new WOW({
    offset: offset,
    mobile: false
  }).init();

  var imgInstaHover = document.createElement('img');
  imgInstaHover.setAttribute('src', './img/inst_hover.png');

  var imgFacebookHover = document.createElement('img');
  imgFacebookHover.setAttribute('src', './img/facebook_hover.png');


})();
