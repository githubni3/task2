// gsap.to('#Opaque_Ring',{strokeDasharray:"1000"  ,duration:4})

//svg progress animation during scroll
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "690% 730%",
    end: "630% top",
    scrub: 1,
  },
});

tl.to("#Opaque_Ring", { strokeDasharray: "142.857", duration: 0.5 })
  .to("#Opaque_Ring", { strokeDasharray: "285.714", duration: 2, delay: 4 })
  .to("#Opaque_Ring", { strokeDasharray: "416.571", duration: 2, delay: 6 })
  .to("#Opaque_Ring", { strokeDasharray: "540.428", duration: 2, delay: 6.5 })
  .to("#Opaque_Ring", { strokeDasharray: "682.571", duration: 2, delay: 6.7 })
  .to("#Opaque_Ring", { strokeDasharray: "825.428", duration: 2, delay: 8 })
  .to("#Opaque_Ring", { strokeDasharray: "1000", duration: 2, delay: 8.5 });

// Select the element that you want to modify classes on
const svg = document.getElementById("transring");
const leftContainer = document.getElementById("left_container");
const page1 = document.getElementById("page1");
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: updateValues,
});

function updateValues() {

  const pageContent = document.getElementsByClassName('pageContent');
  for (let i = 0; i < pageContent.length; i++) {
    const element = pageContent[i];
    element.classList.add('hide')
  }

  scrollValue = ScrollTrigger.positionInViewport(page1, "top");
  if (scrollValue <= 0 && scrollValue >= -0.5) {
    svg.classList = leftContainer.classList = "page1Color";
    pageContent[0].classList.remove('hide');
  } else if (scrollValue < -0.5 && scrollValue >= -1.6) {
    svg.classList = leftContainer.classList = "page2Color";
    pageContent[1].classList.remove('hide');
  } else if (scrollValue < -1.6 && scrollValue >= -2.6) {
    svg.classList = leftContainer.classList = "page3Color";
    pageContent[2].classList.remove('hide');
  } else if (scrollValue < -2.6 && scrollValue >= -3.6) {
    svg.classList = leftContainer.classList = "page4Color";
    pageContent[3].classList.remove('hide');
  } else if (scrollValue < -3.6 && scrollValue >= -4.6) {
    svg.classList = leftContainer.classList = "page5Color";
    pageContent[4].classList.remove('hide');
  } else if (scrollValue < -4.6 && scrollValue >= -5.6) {
    svg.classList = leftContainer.classList = "page6Color";
    pageContent[5].classList.remove('hide');
  } else if (scrollValue < -5.6 && scrollValue >= -6.6) {
    svg.classList = leftContainer.classList = "page7Color";
    pageContent[6].classList.remove('hide');
  }
}
updateValues();

// ******************************
// page1 animations

gsap.from("#page1>img:nth-child(1)", {
  scrollTrigger: {
    trigger: "#page1>img:nth-child(1)",
    toggleActions: "restart none resume none",
  },
  y: "50px",
  duration: 0.5,
  opacity: 0,
});

gsap.from("#page1>img:nth-child(2)", {
  scrollTrigger: {
    trigger: "#page1>img:nth-child(1)",
    toggleActions: "restart none resume none",
  },
  y: "250px",
  duration: 0.5,
  opacity: 0,
});


/* page 2 animation */
gsap.to("#page2>img:nth-child(1)", {
  scrollTrigger: {
    trigger: "#page2>img:nth-child(1)",
    toggleActions: "restart none resume none",
  },
  y: "250px",
  duration: 0.5,
});

gsap.from("#page2>img:nth-child(2)", {
  scrollTrigger: {
    trigger: "#page2>img:nth-child(1)",
    toggleActions: "restart none resume none",
  },
  y: "200px",
  duration: 0.5,
  opacity: 0,
});

/* page 3 animation */


const animation = gsap.fromTo("#page3>img:nth-child(1)", {opacity:0, y: "500px" }, { opacity: 1, y:"100px" });

ScrollTrigger.create({
  trigger: "#page3>img:nth-child(1)",
  toggleActions: "restart none resume none",
  animation: animation
});

gsap.from("#page3>img:nth-child(2)", {
  scrollTrigger: {
    trigger: "#page3>img:nth-child(1)",
    toggleActions: "restart none resume none",
  },
  y: "-500px",
  duration: 0.5,
  opacity: 0,
});

/* page 4 animation */


const animation4 = gsap.fromTo("#page4>img:nth-child(1)", {opacity:0, y: "500px" }, { opacity: 1, y:"40px" });

ScrollTrigger.create({
  trigger: "#page4>img:nth-child(1)",
  toggleActions: "restart none resume none",
  animation: animation4
});

gsap.from("#page4>img:nth-child(2)", {
  scrollTrigger: {
    trigger: "#page4>img:nth-child(1)",
    toggleActions: "restart none resume none",
  },
  y: "500px",
  duration: 0.5,
  opacity: 0,
});



/* page 5 animation */

const animation5 = gsap.fromTo("#page5>img:nth-child(1)", {opacity:0, y: "10px" }, { opacity: 1, y:"-20px" });
const animation5_2 = gsap.fromTo("#page5>img:nth-child(2)", {opacity:0, y: "10px" }, { opacity: 1, y:"-20px" });
const animation5_3 = gsap.fromTo("#page5>img:nth-child(3)", {opacity:0, x:"-100px" ,y: "100px" }, { opacity: 1,x:"20px", y:"180px" });
const animation5_4 = gsap.fromTo("#page5>img:nth-child(4)", {opacity:0, x:"-200px" ,y:"80px"}, { opacity: 1,x:"-200px",y:"-110px" });
const animation5_5 = gsap.fromTo("#page5>img:nth-child(5)", {opacity:0, x:"-200px" ,y:"80px"}, { opacity: 1,x:"-200px",y:"-110px" });

ScrollTrigger.create({
  trigger: "#page5>img:nth-child(1)",
  start:"center center",
  // markers:true,
  toggleActions: "restart none resume none",
  animation: animation5
});

ScrollTrigger.create({
  trigger: "#page5>img:nth-child(2)",
  start:"center center",

    toggleActions: "restart none resume none",
    animation: animation5_2
});
ScrollTrigger.create({
  trigger: "#page5>img:nth-child(3)",
    toggleActions: "restart none resume none",
    animation: animation5_3
});
ScrollTrigger.create({
  trigger: "#page5>img:nth-child(4)",
    toggleActions: "restart none resume none",
    animation: animation5_4
});
ScrollTrigger.create({
  trigger: "#page5>img:nth-child(5)",
    toggleActions: "restart none resume none",
    animation: animation5_5
});


// page 6 animations
const animation6 = gsap.fromTo("#page6>img:nth-child(1)", {opacity:0, x:"-215px", y:"-60px", duration:1 }, { opacity: 1,x:"-195px", y:"-40px" });
const animation6_2 = gsap.fromTo("#page6>img:nth-child(2)", {opacity:0, x:"-100px" ,y: "100px"}, { opacity: 1,x:"-80px", y:"60px" });
const animation6_3 = gsap.fromTo("#page6>img:nth-child(3)", {opacity:0,  x:"185px", y:"-100px",duration:1}, { opacity: 1, x:"0px", y:"-80px" });
const animation6_4 = gsap.fromTo("#page6>img:nth-child(4)", {opacity:0, x:"-200px" ,y:"80px"}, { opacity: 1,x:"-190px",y:"-160px" });
const animation6_5 = gsap.fromTo("#page6>img:nth-child(5)", {opacity:0, x:"80px" ,y:"100px"}, { opacity: 1,x:"40px",y:"60px" });

ScrollTrigger.create({
  trigger: "#page6>img:nth-child(1)",
  toggleActions: "restart none resume none",
  animation: animation6
});

ScrollTrigger.create({
  trigger: "#page6>img:nth-child(2)",
    toggleActions: "restart none resume none",
    animation: animation6_2
});
ScrollTrigger.create({
  trigger: "#page6>img:nth-child(3)",
  start:"center center",
    toggleActions: "restart none resume none",
    animation: animation6_3
});
ScrollTrigger.create({
  trigger: "#page6>img:nth-child(4)",
    toggleActions: "restart none resume none",
    animation: animation6_4
});
ScrollTrigger.create({
  trigger: "#page6>img:nth-child(5)",
    toggleActions: "restart none resume none",
    animation: animation6_5
});
