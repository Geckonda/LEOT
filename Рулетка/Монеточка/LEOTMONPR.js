var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');
var SIM5 = document.querySelector('#SIM5');
var SIM4 = document.querySelector('#SIM4');
var SIM3 = document.querySelector('#SIM3');
var SIM2 = document.querySelector('#SIM2');
var SIM1 = document.querySelector('#SIM1');
var spear1 = document.querySelector('#spear1');
var spear2 = document.querySelector('#spear2');
var OREl = document.querySelector('#OREL');
var RESH = document.querySelector('#RESH');
var HOOK1 = document.querySelector('#hook1');
var HOOK2 = document.querySelector('#hook2');
var restart = document.querySelector('.restart');
var starrt = document.querySelector('.start');

function start(){
	var random = Math.floor(Math.random()*41);
	setTimeout(function(){
	starrt.style.visibility = 'hidden';
	},0010)
	if(random <=20){
	spear1.style.bottom =  -1200 + 'px';
	setTimeout(function(){
		OREL.style.bottom = -4030 + 'px';
	},1000)
	setTimeout(function(){
		spear1.style.opacity = 0;
	},1030)
	}
	else{
	spear2.style.bottom =  -1200 + 'px';
	setTimeout(function(){
		RESH.style.bottom = -4030 + 'px';
	},1000)
	setTimeout(function(){
		spear2.style.opacity = 0;
	},1030)
	}
	setTimeout(function(){
		restart.style.visibility = 'visible';
	},2000)

}
	
	function resctart(){
		//ROFL WORK
		if((RESH.style.bottom == -4030 + 'px')&&(OREL.style.bottom == -4030 + 'px')){
								HOOK1.style.bottom =  -500 + 'px';
								HOOK2.style.bottom =  -500 + 'px';
								setTimeout(function(){
									HOOK1.style.bottom =  +200 + 'px';
									HOOK2.style.bottom =  +200 + 'px';
									},3000)
									setTimeout(function(){
										OREL.style.bottom = 10 + 'px';
										RESH.style.bottom = 10 + 'px';
									},1500)
										spear1.style.bottom =  1600 + 'px';
										spear2.style.bottom =  1600 + 'px';
										setTimeout(function(){
										spear1.style.opacity = 1;
										spear2.style.opacity = 1;
										},3030)
										
									setTimeout(function(){	
										alert('Еща раз так сделаешь, тебя хукну!!!');
									},5500)
							}
			//Normal WORK
			if(OREL.style.bottom == -4030 + 'px'){
				HOOK1.style.bottom =  -500 + 'px';
				setTimeout(function(){
					HOOK1.style.bottom =  +200 + 'px';
					},3000)
					setTimeout(function(){
						OREL.style.bottom = 10 + 'px';
					},1500)
						spear1.style.bottom =  1600 + 'px';
						setTimeout(function(){
						spear1.style.opacity = 1;
						},3030)
					
					
				}
			else{
				if(RESH.style.bottom == -4030 + 'px'){
				HOOK2.style.bottom =  -500 + 'px';
				setTimeout(function(){
					HOOK2.style.bottom =  +200 + 'px';
					},3000)
					setTimeout(function(){
						RESH.style.bottom = 10 + 'px';
					},1500)
					spear2.style.bottom =  1600 + 'px';
					setTimeout(function(){
					spear2.style.opacity = 1;
					},3030)
					
				}
				}
	setTimeout(function(){
		restart.style.visibility = 'hidden';
	},0010)
	
	setTimeout(function(){
		starrt.style.visibility = 'visible';
	},5000)
	}