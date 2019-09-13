let title =  document.getElementById("titre")
title.onclick = change;
let titleStatus = false;
console.log(title.textContent);
function change(){

	console.log("ok, it's true");
	//alert("coucou Justine");
	
	if (titleStatus === false){
		this.innerHTML = "TEST JAVA";
		titleStatus = true;
	} else {
		this.textContent = "titre à selectionner";
		titleStatus = false;
	}	
};
