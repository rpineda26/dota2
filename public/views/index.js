gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
//gsap.registerPlugin(MotionPathPlugin);
const sidebar = document.querySelector('#side-bar');
const section = document.getElementsByClassName('section');
const sidebar_links = document.querySelectorAll('#side-bar a');
const downArrow = document.querySelectorAll('.bi.bi-chevron-compact-down');
const backTop = document.querySelector('#backtotop');
console.log(section);
console.log(downArrow);
document.body.addEventListener('scroll',()=>{
	console.log('scroll');
});

/*
class App {
	constructor(){
		this._init();
		this._render();
	}
	_init(){
		this._setInitialStates();
		this._createLenis();
		this._createIntro();
	}
	_setInitialStates(){
		gsap.set()
	}
	_createLenis(){
		this.lenis = new this.lenis({
			lerp:0.1
		});
	}
	_render(time){
		this.lenis.raf(time);
		requestAnimationFrame(this._render.bind(this));
	}
}
new App();
*/
// Setup
/*= new Lenis({
	wrapper:document.body,
	smoothWheel:true,
});

lenis.on(document.body, (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
*/
for(let i=0;i<downArrow.length;i++){
	console.log(section[i]);
	downArrow[i].addEventListener('click',()=>{
		//section[i+1].scrollIntoView({behavior:'smooth'});
		gsap.to(document.body,{duration:1, scrollTo:{y:section[i+1].span, offsetY:1000},ease:"power2"});
	});
}
backTop.addEventListener('click',()=>{
	section[0].scrollIntoView({behavior:'smooth'});
});
/*
gsap.to(".rect", {
	motionPath: {
	  path: "#wave2",
	  align: "#wave2",
	  alignOrigin: [0.5, 0.5],
	},
	scrollTrigger:{
		trigger:section[0],
		start: "top bottom",
		end: "top top",
		//scrub:true,
		markers:true,
		toggleActions: "restart restart none none",
	},
	transformOrigin: "50% 50%",
	duration:5,
  });
*/

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
gsap.utils.toArray('.section').forEach((section, i) => {
	section.background = section.querySelector('.background');
	gsap.fromTo(section.background,{
		backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: Linear.easeNone,
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true // to make it responsive
    }
});
});

gsap.to(backTop,{
		scrollTrigger:{
			trigger: '.footer',
			start:"bottom bottom",
			end:"bottom bottom",
			toggleActions: "restart none none none",
		//	markers:true
	}, 
	duration:1,
	 scale:2
	});
	
for(let i=0;i<downArrow.length;i++){
	gsap.to(downArrow[i],{
		scrollTrigger: {
			trigger: downArrow[i],
			start: "top bottom",
			end: "bottom center",
			toggleActions: "restart none restart none",
			//markers: true,
		},
		duration:0.5,
		scale:2,
	});
}



section[0].addEventListener("mousemove", function(e) {
  gsap.to('.cursor', {transform:'translate(-50%,-50% scale(1)' ,left:e.x, top:e.y, duration: 0.6, ease: "power3"});
});
section[0].addEventListener('mouseenter',function(){
	gsap.to('.cursor', {transform:'translate(-50%,-50%) scale(1)'});
	console.log("mouseenter");
});
section[0].addEventListener('mouseleave',function(){
	console.log("mouseleave");
	gsap.to('.cursor', {transform:'translate(-50%,-50%) scale(0)'});
});