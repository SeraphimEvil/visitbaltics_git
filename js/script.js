(function () {

  var offset = Math.floor(window.innerHeight / 4);

  new WOW({
    offset: offset,
    mobile: false
  }).init();

  // Дозагрузка изображений
  var imgInstaHover = document.createElement('img');
  imgInstaHover.setAttribute('src', './img/inst_hover.png');

  var imgFacebookHover = document.createElement('img');
  imgFacebookHover.setAttribute('src', './img/facebook_hover.png');

  // Scroll intro
  // var currentScrollPosition = window.scrollY;
  // var introElement = document.querySelector('.intro');
  //
  // var addIntroScrolledClass = function() {
  //   introElement.classList.add('intro--scrolled');
  // };
  //
  // if (currentScrollPosition > 0) {
  //   addIntroScrolledClass();
  // }
  //
  // window.addEventListener('scroll', function (event) {
  //   if (!introElement.classList.contains('intro--scrolled')) {
  //     addIntroScrolledClass();
  //   }
  // })


})();
