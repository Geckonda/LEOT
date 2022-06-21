var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');

function start(){
		document.getElementById("ST").style.visibility = "hidden";
	setTimeout(function(){
		document.getElementById("ST").style.visibility = "visible";
	},7000);
	var random = Math.floor(Math.random()*39);
	cards_block.style.left = - random * 300 + 'px';
	// setTimeout(function(){
	// alert('Иди играй давай, чучело!');
	// },8000)
}