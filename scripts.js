var otherwords = ["Dopey", "Goofy", "Not so nice", "Gross", "Wrong", "Icky", "Confusing", "Weird", "Are you serious?"];

function replace (){
	var random = Math.floor(Math.random()*otherwords.length);
	var newword = otherwords[random];
	document.getElementById("word").innerHTML = newword;
}