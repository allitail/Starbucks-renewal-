
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // Check all slides and initialize video players
  var swiper = document.getElementById('video-swiper');
  var slides = swiper.getElementsByClassName('swiper-slide')
  
  var players = [];
  
  for (var i=0; i < slides.length; i++) {
    var element = slides[i].getElementsByClassName('yt-player')[0];
    var id = element.getAttribute('data-youtubeLink');
    
    var player = new YT.Player(element, {

      videoId: id,
      playerVars: {
        autoplay: true,
        color: '#7fbc03',
        modestbranding: true,
        rel: 0
      }
      // events: {
      //   'onReady': onPlayerReady,
      //   'onStateChange': onPlayerStateChange
      // }
    });
    players.push(player);
  }


  new Swiper('.swiper-outter .swiper')


  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    // effect: 'slide',
    // autoplay: true,
    mousewheel: true,
    // loop: true,
    slidesPerView: 1,
    playerVars: {
      'wmode': 'opaque',
    'origin': 'http://localhost:8100'
    },
    pagination: {
      el: $('.paging_list'),
      // type: 'custom',
      clickable: true,
      renderBullet: function (index, className) {
        return '<li class="'+className+'"<span>' + (index+1) + '</span></li>';
      }
    },
    on: {
      reachEnd: function () {
        swiper.mousewheel.disable();
      }
    }
  });

    window.addEventListener('wheel', function(event) {
    if(event.deltaY < 0) {
      swiper.mousewheel.enable();
    } else if (event.deltaY > 0) {

    }
    // breakpoints: {
    //   768 {
        
    //   }
    // }
  });
}



