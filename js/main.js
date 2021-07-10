
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});
//slider
$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  // function advance() {
   
  //   timeout = setTimeout(function() {
  //     if (currentIndex < ($slides.length - 1)) {
  //       move(currentIndex + 1);
  //     } else {
  //       move(0);
  //     }
  //   });
  // }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
 
});
$(document).ready(function(){
 function makeTimer(et,d,h,m,s) {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
           			
                endTime = (Date.parse(et) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
              d.html(days + "<span>روز</span>");
              h.html(hours + "<span>ساعت</span>");
                m.html(minutes + "<span>دقیقه</span>");
               s.html(seconds + "<span>ثانیه</span>");		
    
        }
     var endTime1 = new Date("21 july 2021 00:00:00 GMT+01:00");
     var endTime2 = new Date("25 september 2021 00:00:00 GMT+01:00");
     var d= $("#days")
     var h=$("#hours")
     var m=$("#minutes")
     var s=$("#seconds")
      var d2= $("#days2")
     var h2=$("#hours2")
     var m2=$("#minutes2")
     var s2=$("#seconds2")
       var dc= $(".days")
     var hc=$(".hours")
     var mc=$(".minutes")
     var sc=$(".seconds")
        setInterval(function() { makeTimer(endTime1,d,h,m,s); }, 1000);
            setInterval(function() { makeTimer(endTime2,d2,h2,m2,s2); }, 1000);
              setInterval(function() { makeTimer(endTime2,dc,hc,mc,sc); }, 1000);
})


