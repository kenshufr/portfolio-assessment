$(function() {
  $.scrollify({
    section : "section",
  });
});
$( "#logo" ).click(function() {
  $.scrollify.move("#landing-page-section");
})
$( "#home-link" ).click(function() {
  $.scrollify.move("#landing-page-section");
})
$( "#projects-link" ).click(function() {
  $.scrollify.move("#zen-garden-section");
})
$( "#about-link" ).click(function() {
  $.scrollify.move("#about-me-section");
})
$( "#contact-link" ).click(function() {
  $.scrollify.move("#contact-section");
})
$( "#chevron" ).click(function() {
  $.scrollify.next();
})