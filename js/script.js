// gsap.to('#Opaque_Ring',{strokeDasharray:"1000"  ,duration:4})


//svg progress animation during scroll
const tl = gsap.timeline({
  scrollTrigger:{
    trigger:'#page2',
    start:"690% 730%",
    end: "630% top",
    markers:true,
    scrub:1
  }
})

tl.to("#Opaque_Ring",{strokeDasharray:"142.857",duration:2})
.to("#Opaque_Ring",{strokeDasharray:"285.714",duration:2,delay:4})
.to("#Opaque_Ring",{strokeDasharray:"416.571",duration:2,delay:6})
.to("#Opaque_Ring",{strokeDasharray:"540.428",duration:2,delay:6.5})
.to("#Opaque_Ring",{strokeDasharray:"682.571",duration:2,delay:6.7})
.to("#Opaque_Ring",{strokeDasharray:"825.428",duration:2,delay:8})
.to("#Opaque_Ring",{strokeDasharray:"1000",duration:2,delay:8.5})



window.onscroll = function() {changeColor()};

function changeColor() {
  if (document.documentElement.scrollTop > 50 ) {
    document.getElementById("#transring").classList += 'red';
  } else {
    // document.getElementById("myP").className = "";
  }
}