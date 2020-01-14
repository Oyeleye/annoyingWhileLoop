var answer=prompt("Are we there yet?");
	
while (answer !== "Yes" && answer !=="Yeah") {
	var answer=prompt("Are we there yet?");
}
alert ("YAYY, you made it!");

//or
//If you run it this way, it will only repeat 'are we there yet' one more time. So rather than using simple conditional IF, you should use the WHILE LOOP, since you want 'are we there yet' to be repeated until 'Yes' is typed. 
//var answer=prompt("Are we there yet?");
//if(answer === "Yes") {
//	alert ("YAYY, you made it!")
//}
//else {
//	var answer=prompt("Are we there yet?");
//}

//VERSION 2 
//with this, even though you responded with a sentence, so far we typed 'yes', it will accept it, cuz we used index of.

var answer=prompt("Are we there yet?");
	
while (answer.indexOf("yes") === -1) {
	var answer=prompt("Are we there yet?");
}
alert ("YAYY, you made it!");

