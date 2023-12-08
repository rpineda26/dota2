const playerID_inp = document.querySelector('#player_id_input');
const playerID_bttn = document.querySelector('#player_id_submit');
var playerID = "";
let heroName ="";
playerID_bttn.addEventListener('click', () => {
	playerID = playerID_inp.value;
	console.log(playerID);
	document.querySelector('#player_id').textContent = playerID;
})
