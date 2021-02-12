function scrollToDivMobile(divName){
  $('html').animate({scrollTop: $('#'+divName).offset().top -200 }, 'slow');
}

function scrollToDiv(divName){
  $('html').animate({scrollTop: $('#'+divName).offset().top -165 }, 'slow');
}

$("#btn-contact-us").click(function(e){
  e.preventDefault();
  scrollToDiv('section-contact-us');
  return false;
});

$("#btn-contact-us-mobile").click(function(e){
  e.preventDefault();
  scrollToDivMobile('section-contact-us');
  return false;
});