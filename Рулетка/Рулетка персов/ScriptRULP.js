var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');
var SIM5 = document.querySelector('#SIM5');
var SIM4 = document.querySelector('#SIM4');
var SIM3 = document.querySelector('#SIM3');
var SIM2 = document.querySelector('#SIM2');
var SIM1 = document.querySelector('#SIM1');
var ZANAVEC = document.querySelector('.ZAN');

function start(){
		document.getElementById("ST").style.visibility = "hidden";
	setTimeout(function(){
		document.getElementById("ST").style.visibility = "visible";
	},7000);
	var random = Math.floor(Math.random()*8);
	ZANAVEC.style.top =  0 + 'px';
	setTimeout(function(){
	cards_block.style.left = - random * 100 + 'px';
	},1000);
	setTimeout(function(){
		SIM5.style.opacity = 1;
		setTimeout(function(){
			SIM5.style.opacity = 0;
			SIM4.style.opacity = 1;
					setTimeout(function(){
					SIM4.style.opacity = 0;
					SIM3.style.opacity = 1;
						setTimeout(function(){
						SIM3.style.opacity = 0;
						SIM2.style.opacity = 1;
							setTimeout(function(){
							SIM2.style.opacity = 0;
							SIM1.style.opacity = 1;
								setTimeout(function(){
								SIM1.style.opacity = 0;
								},1000)
							},1000)
						},1000)
					},1000)
				},1000)
		},1000)
	setTimeout(function(){
	ZANAVEC.style.top =  -160 + 'px';
	},6000)
	
}