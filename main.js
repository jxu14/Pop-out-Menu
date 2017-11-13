function changeSize(element){
	let elementClass = element.className;
	if(elementClass.match("wide") === false){
		element.className +=" wide";
	}else{
		element.className +=" wide";
	}
}


function closeSize(element){
	let X = element.className;
	if(X.match("wide")){
		element.className = X.replace(" wide","");

	}else{
		// element.className +=" wide";
	}
}

function adjustinner(element){
	let inner = element.className;

	if(inner.match(" adjust")){

		element.className == inner.replace(" adjust"," ");

	}else{
		element.className +=" adjust";
	
	}
}


//diver code
let menu = document.querySelector(".inner")
let X = document.querySelector("#close");
X.addEventListener("click",function(){
		closeSize(box1);
		adjustinner(menu);
})


let button1 = document.querySelector(".button1");
let box1 = document.querySelector(".box1");
button1.addEventListener("click",function(){
	changeSize(box1);
	adjustinner(menu);
})