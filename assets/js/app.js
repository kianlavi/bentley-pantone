var isMobile;
 
// Identify if visitor on mobile with lame sniffing to remove parallaxing title
if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/)
){
  isMobile = true;
}
 
$(document).ready(function() {
 
  // Global vars
  var $artHeaderInner = $('.art-header-inner');
  var $artHeader = $('.art-header');
  var $artTitle = $('.art-title');
  var $artSubtitle = $('.art-subtitle');
  var $artTime = $('.art-time');
  var artTitleFontSize = parseInt($artTitle.css('font-size'));
  var $nav = $('.nav');
  var windowScroll;
 
  // Apply Fittext to article titles to make it scale responsively in a smooth fashion
  $artTitle.fitText(1, { minFontSize: '34px' });
 
  // Identify if visitor has a large enough viewport for parallaxing title
  function isLargeViewport() {
    if($nav.css('position') == "relative") {
      return false;
    } else {
      return true;
    }
  }
 
  // If large viewport and not mobile, parallax the title
  if(!isMobile) {
    $(window).scroll(function() {
      if(isLargeViewport()) {
        slidingTitle();
      }
    });
  }
 
  // Window gets large enough, need to recalc all parallaxing title values
  $(window).resize(function() {
    if(isLargeViewport()) {
      slidingTitle();
    }
  });
 
  // Functional parallaxing calculations
  function slidingTitle() {
    //Get scroll position of window
    windowScroll = $(this).scrollTop();
 
    //Slow scroll of .art-header-inner scroll and fade it out
    $artHeaderInner.css({
      'margin-top' : -(windowScroll/3)+"px",
      'opacity' : 1-(windowScroll/550)
    });
 
    //Slowly parallax the background of .art-header
    $artHeader.css({
      'background-position' : 'center ' + (-windowScroll/8)+"px"
    });
 
    //Fade the .nav out
    $nav.css({
      'opacity' : 1-(windowScroll/400)
    });
  }
 
  // Link to top of page without changing URL
  $('.back-to-top a').click(function(e) {
    e.preventDefault();
    $(window).scrollTop(0);
  })
 
  // // Cover image of the header
  var $postImage = $('.cover-image');
  if ( $postImage.length ) {
  var postImageURL = $postImage.attr('src');
  $('.art-header').css('background-image','url(' + postImageURL + ')');
  $('.art-title').css('color', 'white');
  $('.whitewash').css('color', 'white');
  $('.nav').css('border-bottom-color', 'rgba(255,255,255,0.3');
  $('time').css('color', 'rgba(255,255,255,0.75)');
    }
  $postImage.remove();
 
  // Subtitles
  var $subtitle = $('span[id="subtitle"]');
  if ( $subtitle.length ) {
      var subtitleText = $('#subtitle').text();
      $('.art-subtitle').html(subtitleText);
  }
  $subtitle.remove();

  // Hover trigger
  $( ".art-list-item" ).hover(function() {
    $(this).find(".art-list-title a").toggleClass("whiteOut");
    //$( ".art-list-title > a" ).toggleClass( "whiteOut" );
});
  // $('.art-list-item').hover(
  // function() {
  //   $('h2').css('color', 'white');


  // Cover image of the header
  var $postImage = $('.cover-image');
  var $postImage = $('img[alt="cover"]');
  if ( $postImage.length ) {
  var postImageURL = $postImage.attr('src');
  $('.art-header').css('background-image','url(' + postImageURL + ')');
  $('.art-title').css('color', 'white');
  $('.art-subtitle').css('color', 'white');
  $('.whitewash').css('color', 'white');
  $('.nav').css('border-bottom-color', 'rgba(255,255,255,0.3');
  $('time').css('color', 'rgba(255,255,255,0.75)');
  
  }
  
  $postImage.remove();

 
});

//Function to wrap image in an a tag 
  var aTagWrap = function(elem,elemClass){        
        if($(elem).length > 0){
            var imgs = $(elem);
            if(imgs.length > 0){
                imgs.each(function(){
                    var $this = $(this);
                    var imgLink = $this.attr('src');
                    
                    var html = '';
                    html = "<a class='"+elemClass+"' href='"+ imgLink +"'></a>";
                    
                    $this.wrap(html);
                });
 
            }
        }
    }
    
    //Call function example
    aTagWrap('.post-page-post .post-text img','fluid-popup');
    $('.fluid-popup').fluidbox();