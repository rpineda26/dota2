
const sidebar = document.querySelector('#side-bar');
const section = document.getElementsByClassName('section');
const sidebar_links = document.querySelectorAll('#side-bar a');
const downArrow = document.querySelectorAll('.bi.bi-chevron-compact-down');
const backTop = document.querySelector('#backtotop');

console.log(downArrow);
document.body.addEventListener('scroll',()=>{
	console.log('scroll');
});


for(let i=0;i<downArrow.length;i++){
	downArrow[i].addEventListener('click',()=>{
		scrollHere(i+1);
	});
}
backTop.addEventListener('click',()=>{
	scrollHere(0);
});
function scrollHere(index){
	console.log(`scroll to section ${index}`);
	section[index].scrollIntoView({behavior:'smooth'});
}