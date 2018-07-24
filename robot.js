var click = document.getElementsByClassName("right_arm")[0];

click.addEventListener("click", function(){
	alert("Sa nu lovesti un robot nici cu o floare!");
})

var clickOnMyLeftArm = document.getElementsByClassName("left_arm")[0];
clickOnMyLeftArm.addEventListener("click", function(){
	alert("Nu atinge! Ma dau cu vaselina.");
})
var clickOnMyLeftLeg = document.getElementsByClassName("left_leg")[0];
clickOnMyLeftLeg.addEventListener("click", function(){
	alert("La dans!");
})
var clickOnMyHead = document.getElementsByClassName("head")[0];
clickOnMyHead.addEventListener("click", function(){
	alert("Am capul mare ca am procesorul tare!");
})