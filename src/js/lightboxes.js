var lightboxj = jQuery.noConflict();
function openlightbox(lightboxid){
  jQuery(".overlay-lightbox").fadeOut();
  jQuery(".overlay-lightbox#"+lightboxid).fadeIn().css("display","flex");
  jQuery("body").css({"overflow":"hidden"});
}

/*function openlightbox(lightboxid){
  $(".overlay-lightbox").fadeOut();
  $(".overlay-lightbox#"+lightboxid).fadeIn().css("display","flex");
  $("body").css({"overflow":"hidden"});
}*/
lightboxj(document).ready(function(){
  lightboxj(".open-lightbox").click(function(e) {
    lightboxj(".overlay-lightbox").fadeOut();
    lightboxj("#" + lightboxj(this).attr("lightbox-id")).fadeIn().css("display","flex");
    lightboxj("body").css({"overflow":"hidden"});
  });

  lightboxj("a.open-lightbox").click(function(e) {
    e.preventDefault();
    //lightboxj(".overlay-lightbox").fadeOut();
    lightboxj("#" + lightboxj(this).attr("lightbox-id")).fadeIn().css("display","flex");
    lightboxj("body").css({"overflow":"hidden"});
  });

  lightboxj(".overlay-lightbox").click(function(e) {
    lightboxj(".overlay-lightbox").fadeOut();
    lightboxj("body").css({"overflow":"unset"});
    lightboxj(".overlay-lightbox iframe").attr("src", lightboxj("#contact-list-lightbox iframe").attr("src"));
  });

  lightboxj(".lightbox").click(function(e) {
    e.stopPropagation();
  });

  lightboxj(".close_lightbox").click(function(e) {
    e.preventDefault();
    lightboxj(".overlay-lightbox").fadeOut();
    lightboxj("body").css({"overflow":"unset"});
    lightboxj(".overlay-lightbox iframe").attr("src", lightboxj("#contact-list-lightbox iframe").attr("src"));
  });

  lightboxj(".close_iframe_lightbox").click(function(e) {
    if(in_iframe()){
      e.preventDefault();
      window.parent.lightboxj(".overlay-lightbox").fadeOut();
      lightboxj("body").css({"overflow":"unset"});
      lightboxj(".overlay-lightbox iframe").attr("src", lightboxj("#contact-list-lightbox iframe").attr("src"));
    }
  });

});
