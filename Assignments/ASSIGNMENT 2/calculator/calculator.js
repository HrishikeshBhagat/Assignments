var a = '';
var b = '';
var num = [];
var ans;

function sendNum(digit) {

	num.push(digit);

	if (num.length != 1) {
		a = '';
		document.getElementById('display').innerHTML = a; // clearing the display.
	}


	for (i = 0; i < num.length; i++) {
		a = a + num[i];
	}
	document.getElementById('display').innerHTML = a;	// displaying the concatenated string
}



function equalTo() {
	document.getElementById('display').innerHTML = '';
	
	for (i = 0; i < num.length; i++) {
		b += num[i];
	}
	ans = eval(b);
	document.getElementById('display').innerHTML = ans;		// result display
	while (num.length > 0) {
		num.pop();
	}
	num.push(ans.toString());

}


function clearScr() {
	document.getElementById('display').innerHTML = '';

	while (num.length > 0) {
		num.pop();
	}

	a = '';
	b = '';
}