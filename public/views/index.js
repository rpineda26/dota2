
const sidebar = document.querySelector('#side-bar');
const section = document.getElementsByClassName('section');
const sidebar_links = document.querySelectorAll('#side-bar a');

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

