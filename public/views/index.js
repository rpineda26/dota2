gsap.registerPlugin(ScrollTrigger);
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


for(let i=0;i<downArrow.length;i++){
	console.log(section[i]);
	downArrow[i].addEventListener('click',()=>{
		section[i+1].scrollIntoView({behavior:'smooth', block:'center'});
	});
}
backTop.addEventListener('click',()=>{
	section[0].scrollIntoView({behavior:'smooth'});
});

for(let i=0;i<downArrow.length;i++){
	gsap.to(downArrow[i],{
		scrollTrigger: {
			trigger: downArrow[i],
			start: "top bottom",
			end: "bottom center",
			toggleActions: "restart none restart none",
			markers: true,
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