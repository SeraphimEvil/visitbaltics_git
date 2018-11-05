(function () {

  var offset = Math.floor(window.innerHeight / 4);

  new WOW({
    offset: offset,
    mobile: false
  }).init();

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

  var imgSetAttribute = function (link) {
    console.log(link)

    document.createElement('img').setAttribute('src', './img/' + link);
  };


  var uploadAllImages = function () {
    imgSetAttribute('inst_hover.png');
    imgSetAttribute('facebook_hover.png');

    // page index
    imgSetAttribute('intro/main_no-logo.jpg');
    imgSetAttribute('intro/logo.png');
    imgSetAttribute('tallinn/tallinn.jpg');
    imgSetAttribute('tallinn/tallinn_note.png');
    imgSetAttribute('tallinn/tallinn_note.png');
    imgSetAttribute('tallinn/knocker_signature.png');
    imgSetAttribute('tallinn/door.jpg');
    imgSetAttribute('tallinn/lantern.jpg');
    imgSetAttribute('tallinn/townhall.jpg');
    imgSetAttribute('tallinn/bottle.jpg');
    imgSetAttribute('tallinn/ice.jpg');
    imgSetAttribute('tallinn/cola.jpg');
    imgSetAttribute('tallinn/coffee.jpg');
    imgSetAttribute('tallinn/kadriorg.jpg');
    imgSetAttribute('tallinn/kadriorgflower_bg.jpg');
    imgSetAttribute('tallinn/palace.jpg');
    imgSetAttribute('tallinn/viewpoint.jpg');
    imgSetAttribute('riga/mans.jpg');
    imgSetAttribute('riga/riga_note.png');
    imgSetAttribute('riga/sphinx.jpg');
    imgSetAttribute('riga/blackheads.jpg');
    imgSetAttribute('riga/price.png');
    imgSetAttribute('riga/soup_signature.png');
    imgSetAttribute('riga/peas_signature.png');
    imgSetAttribute('riga/brothers3.jpg');
    imgSetAttribute('riga/number.png');
    imgSetAttribute('riga/balsam.jpg');
    imgSetAttribute('riga/sprats.jpg');
    imgSetAttribute('riga/candies.jpg');
    imgSetAttribute('riga/oldtown.jpg');
    imgSetAttribute('vilnius/vilnius.jpg');
    imgSetAttribute('vilnius/vilnius_note.png');
    imgSetAttribute('vilnius/circle_uzupis.png');
    imgSetAttribute('vilnius/angel.jpg');
    imgSetAttribute('vilnius/teapot1.jpg');
    imgSetAttribute('vilnius/pilies.jpg');
    imgSetAttribute('vilnius/teapot2.jpg');
    imgSetAttribute('vilnius/vilnius_architecture.jpg');
    imgSetAttribute('vilnius/vilnius_view.jpg');
    imgSetAttribute('vilnius/vilnius_view.jpg');
    imgSetAttribute('vilnius/balloon.png');

    // page vilnius








  };

  uploadAllImages();


})();
