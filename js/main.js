(function () {
  var scroll = new LocomotiveScroll();
})();

gsap.config({trialWarn: false});
// Animation 1
const childSplit = new SplitText(".anim-1", {
    type: "lines",
    linesClass: "split-child"
  });
  const parentSplit = new SplitText(".anim-1", {
    type: "lines",
    linesClass: "split-parent"
  });
  
  gsap.from(childSplit.lines, {
    duration: 1.5,
    yPercent: 100,
    ease: "power4",
    stagger: 0.1
  });
  
  // Animation 2
  gsap.utils.toArray(".anim-2").forEach((title) => {
  
    const splitText = new SplitText(title, { type: "chars" });
    const chars = splitText.chars;
    
    gsap.set(chars, { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"})
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top center",
          //toggleActions: "play pause replay pause",
          toggleActions: "play none none reverse",
          markers: true,
        }
      });
    
      tl    
      .to(title, {
        duration: 1,
        
      })  
      .to(
      chars,
      {
        duration: 0.5,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      })
      ;
    
    
  });
  

  // var square = document.getElementById('chart')
  // TweenMax.to(square, {rotation:"360", duration: 4, ease: 'none', repeat:-1});


  // CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$("a").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


Fancybox.bind("[data-fancybox]", {
  Image: {
    zoom: true,
  },
});