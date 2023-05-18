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

const page1_timeline = gsap.timeline();
page1_timeline.from("#page1>img:nth-child(1)", {
  y: "100px",
  duration: 0.2,
  opacity: 0,
})
.from("#page1>img:nth-child(2)", {
  y: "10px",
  opacity: 0,
});

ScrollTrigger.create({
  trigger: "#page1",
    toggleActions: "restart none resume none",
    start:"70% 60%",
    end:"70% 30%",
    onEnter:()=>{
      page1_timeline.play();
    },
    onEnterBack:()=>{
      page1_timeline.restart();
    }
})


// ******************************
// page2 animations

const page2_timeline = gsap.timeline();
page2_timeline.to("#page2>img:nth-child(1)", {
  y: "250px",
  duration: 0.2,
})
.from("#page2>img:nth-child(2)", {
  y: "200px",
  opacity: 0,
});

ScrollTrigger.create({
  trigger: "#page2",
    toggleActions: "restart none resume none",
    start:"70% 80%",
    end:"30% 30%",
    onEnter:()=>{
      page2_timeline.restart();
    },
    onEnterBack:()=>{
      page2_timeline.restart();
    }
})


// ******************************
// page3 animations

const page3_timeline = gsap.timeline();
page3_timeline.fromTo("#page3>img:nth-child(1)", {opacity:0, y: "500px" }, { opacity: 1, y:"100px" })
.from("#page3>img:nth-child(2)", {
  y: "-200px",
  duration: 0.3,
  opacity: 0,
});

ScrollTrigger.create({
  trigger: "#page3",
    toggleActions: "restart none resume none",
    start:"60% 90%",
    end:"40% 40%",
    onEnter:()=>{
      page3_timeline.restart();
    },
    onEnterBack:()=>{
      page3_timeline.restart();
    }
})


// ******************************
// page4 animations

const page4_timeline = gsap.timeline();
page4_timeline.fromTo("#page4>img:nth-child(1)", {opacity:0, y: "500px" }, { opacity: 1, y:"40px" ,duration:0.})
.from("#page4>img:nth-child(2)", {
  y: "200px",
  opacity: 0,
});

ScrollTrigger.create({
  trigger: "#page4",
    toggleActions: "restart none resume none",
    start:"60% 80%",
    end:"30% 30%",
    onEnter:()=>{
      page4_timeline.restart();
    },
    onEnterBack:()=>{
      page4_timeline.restart();
    }
})


// ******************************
// page5 animations

const page5_timeline = gsap.timeline({duration:0.2 });
page5_timeline.from("#page5>img:nth-child(1)", {opacity:0, left:"18%"})
.from("#page5>img:nth-child(2)", {opacity:0, top:"-2%"})
.from("#page5>img:nth-child(3)", {opacity:0, right:"-2%" })
.from("#page5>img:nth-child(4)", {opacity:0, bottom:"-10%"})
.from("#page5>img:nth-child(5)", {opacity:0, bottom:"-10%"});

ScrollTrigger.create({
  trigger: "#page5",
    toggleActions: "restart none resume none",
    start:"60% 90%",
    end:"40% 30%",
    onEnter:()=>{
      page5_timeline.restart();
    },
    onEnterBack:()=>{
      page5_timeline.restart();
    }
})




// // ******************************
// // page6 animations

const page6_timeline = gsap.timeline();
page6_timeline.from("#page6>img:nth-child(1)", {opacity:0, left: "-2%", duration:0.2 })
.from("#page6>img:nth-child(2)", {opacity:0,right: "-2%"})
.from("#page6>img:nth-child(3)", {opacity:0,  top: "18%"})
.from("#page6>img:nth-child(4)", {opacity:0,bottom: "-10%"})
.from("#page6>img:nth-child(5)", {opacity:0,bottom: "-10%", right: "-2%"});

ScrollTrigger.create({
  trigger: "#page6",
    toggleActions: "restart none resume none",
    start:"60% 90%",
    end:"40% 30%",
    onEnter:()=>{
      page6_timeline.restart();
    },
    onEnterBack:()=>{
      page6_timeline.restart();
    }
})



// function handleWidthChange() {
//   const currentWidth = window.innerWidth;
//   if (currentWidth <= 1024) {
//     document.getElementsByClassName('content')[0].classList.add('hide');
//     document.getElementsByClassName('mob_content')[0].classList.remove('hide');
//   }else{
//     document.getElementsByClassName('content')[0].classList.remove('hide');
//     document.getElementsByClassName('mob_content')[0].classList.add('hide');
//   }
// }



// // Add event listener for width changes
// window.addEventListener('resize', handleWidthChange);



