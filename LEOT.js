/* Audio */
let audio1 = document.getElementById('aud1');
let audio2 = document.getElementById('aud2');
let audio3 = document.getElementById('aud3');
/* Flex */
let random =  function (){
	 let r = Math.floor(Math.random()*256);
	 let g = Math.floor(Math.random()*256);
	 let b = Math.floor(Math.random()*256);
	 return rgb =  `rgb(${r},${g},${b})`;
 }
 function start(){
 	//audio in a Flex
 	let any = Math.floor(Math.random()*3);
		if(any==0){
			audio1.currentTime = 0.0;
			audio1.play();
		}
			else{
				if(any==1){
					audio2.currentTime = 39.0;
					audio2.play();
				}
				else{
					if(any==2){
						audio3.currentTime = 42.0;
						audio3.play();
					}
				}
			}
	//Flex-flex
							document.getElementById("MAIN").style.transitionDuration = "0.75s";
							document.getElementById("header").style.transitionDuration = "0.75s";
							document.getElementById("RST").style.transitionDuration = "0.75s";
							//document.getElementById("VHODNYAK").style.transitionDuration = "0.75s";
		//Start button
		//document.getElementById("SVH").style.visibility = "hidden";
		document.getElementById("ST").style.visibility = "hidden";
		document.getElementById("Hleft").style.visibility = "hidden";
			let timerId = setInterval(() =>{
				let y = random();
				let z = random();
				let main = document.getElementById("MAIN").style.backgroundColor = y;
				let header = document.getElementById("header").style.backgroundColor = z;
				document.getElementById("RST").style.backgroundColor = y;
				document.getElementById("RST").style.color = z;
				},700);
						setTimeout (function(){
							document.getElementById("RST").style.visibility = "visible";
							},1000);
					
		//Stop button
		
document.getElementById('RST').onclick = function(){
			clearInterval(timerId);
				document.getElementById('RST').style.visibility = "hidden";
						document.getElementById("MAIN").style.backgroundColor = "#E18222";
						document.getElementById("header").style.backgroundColor = "#5D1212";
						document.getElementById("MAIN").style.transitionDuration = "2s";
						document.getElementById("header").style.transitionDuration = "2s";
						//document.getElementById("VHODNYAK").style.transitionDuration = "2s";
						document.getElementById("RST").style.transitionDuration = "0.2s";
							setTimeout (function(){
								document.getElementById("ST").style.visibility = "visible";
								document.getElementById("Hleft").style.visibility = "visible"
								//document.getElementById("SVH").style.visibility = "visible";;
								},1000);
									if(any==0){
												audio1.pause();
												audio1.currentTime = 0.0;
											}
												else{
													if(any==1){
														audio2.pause();
														audio2.currentTime = 0.0;
													}
													else{
														if(any==2){
															audio3.pause();
															audio3.currentTime = 42.0;
															}
														}
													}
												}
}
	