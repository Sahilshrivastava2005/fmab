var crsr=document.querySelector("#cursor");
var bluur=document.querySelector("#blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-25+"px";
    crsr.style.top=dets.y-15+"px";
    bluur.style.left=dets.x-130+"px";
    bluur.style.top=dets.y-130+"px";
})
var navh4=document.querySelectorAll("#nav h4");
navh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3,
        crsr.style.border="2px solid white",
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1,
        crsr.style.border="0px solid white",
        crsr.style.backgroundColor="rgba(127, 255, 157, 0.825)"
    })
})
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "9%",
    duration: 0.8, 
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%", 
        end: "top -20%", 
        scrub: 2
    }
});
gsap.to(
    "#main",{
        backgroundColor:"#000",
        
        scrollTrigger:{
            trigger:"#body",
            scroller:"body",
            start:"top -25%",
            end:"top -70%",
            scrub:1
        }
    }
)
gsap.from(
    "#aboutus",{
        y:100,
        opacity:0,
        duration:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:"#aboutus",
            scroller:"body",
            start:"top 60%",
            end:"top 58%",
            scrub:3
        }
    }
)
gsap.from(
    ".card",{
        scale:0.5,
        opacity:0,
        scrollTrigger:{
            trigger:".card",
            scroller:"body",
            start:"top 60%",
            end:"top 58%",
            scrub:1
        }
    }
)
gsap.from(
    "#suck",{
        x:-70,
        y:-70,
        scrollTrigger:{
            trigger:"#suck",
            scroller:"body",
            start:"top 50%",
            end:"top 50%",
            scrub:2
        }
    }
)
gsap.from(
    "#suck1",{
        x:70,
        y:70,
        scrollTrigger:{
            trigger:"#suck",
            scroller:"body",
            start:"top 50%",
            end:"top 50%",
            scrub:4
        }
    }
)
gsap.from(
    "#lorem",{
        x:45,

        scrollTrigger:{
            trigger:"#suck",
            scroller:"body",
            start:"top 55%",
            end:"top 50%",
            scrub:2
        }
    }
)
gsap.from(
    "#page4 h1",{
        y:50,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2
        }
    }
)

