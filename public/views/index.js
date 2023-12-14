
const sidebar = document.querySelector('#side-bar');
const section = document.getElementsByClassName('section');
const sidebar_links = document.querySelectorAll('#side-bar a');
sidebar.classList.add('d-none');
document.addEventListener("wheel", function(e){
	console.log('99');
	let true_focus = false;
	for(let i=0;i<section.length-1;i++){
		console.log(sidebar_links[i].classList);
		if(sidebar_links[i].classList.contains('active'))
			true_focus = true;
	}
	console.log(true_focus);
	if(!true_focus){
		sidebar.classList.remove('active');
		sidebar.classList.add('d-none');
	}
	else{
		sidebar.classList.add('active');
		sidebar.classList.remove('d-none');
	}
});

section[0].addEventListener('click',()=>{
	console.log('click'+section[0].textContent);
	section[0].scrollIntoView({behavior:'smooth'});
});
section[1].addEventListener('click',()=>{
	console.log('click');
	
	section[1].scrollIntoView({behavior:'smooth'});

});

section[2].addEventListener('click',()=>{
	console.log('click');
	section[2].scrollIntoView({behavior:'smooth'});
});

section[3].addEventListener('click',()=>{
	console.log('click');
	section[3].scrollIntoView({behavior:'smooth'});
});

section[4].addEventListener('click',()=>{
	console.log('click');
	section[4].scrollIntoView({behavior:'smooth'});
});

section[5].addEventListener('click',()=>{
	console.log('click');
	section[5].scrollIntoView({behavior:'smooth'});
});

