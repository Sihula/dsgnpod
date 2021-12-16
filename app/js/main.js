$(function () {
  $('.topics__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true
  });

});
const hamburger = document.querySelector('.burger');
const navLink = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('active');
});