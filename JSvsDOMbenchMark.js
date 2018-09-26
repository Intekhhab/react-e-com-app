var length = 10000;
var ar = new Array(length+1).join('0').split('');

document.body.innerHTML = '';

var htmlStartTime = (new Date()).getTime();
	

for (let i = 0; i < length; i++) {
	
	let div = document.createElement('div');
	div.setAttribute('id', i);
	div.innerText = i;
	document.body.appendChild(div);
}

var str = '';

for (let i = 0; i < length; i++) {
	let txt = document.getElementById(i) && document.getElementById(i).innerText;
	str += txt;
}

var htmlEndTime = (new Date()).getTime();

console.log('Time taken in DOM --- ', htmlEndTime - htmlStartTime);

//JS test ***********************************************************************

var newArray = [];

var jsStartTime = (new Date()).getTime();

for (let i = 0; i < length; i++) {
	
	newArray.push(i);
}

var strJS = '';

for (let i = 0; i < length; i++) {
	strJS += newArray[i];
}

var jsEndTime = (new Date()).getTime();

console.log('Time taken in JS --- ', jsEndTime - jsStartTime);

console.log(str === strJS);