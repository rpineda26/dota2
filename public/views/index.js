
const sidebar = document.querySelector('#side-bar');
const section = document.getElementsByClassName('section');
const sidebar_links = document.querySelectorAll('#side-bar a');
console.log(section);
console.log(sidebar);
console.log(section[0].textContent);
console.log(sidebar_links);

sidebar.addEventListener("change", function(e){
	console.log('99');
	const true_focus = false;
	for(let i=0;i<section.length-1;i++){
		console.log(sidebar_links[i].classList);
		if(sidebar_links[i].classList.contains('active'))
			true_focus = true;
	}
	if(!true_focus)
		sidebar.style.display = 'none';
	else
		sidebar.style.display = 'block';
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

