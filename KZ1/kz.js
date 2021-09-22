let name="Ilya";
let month="January";
let year="2003";

function uwu(){
	alert('Hello dear '+name+'. Your birthday at '+month+' '+year);
}


function rangeArr(st,en){
	let array=[];
	for (let i = 0; i<31; i++) {
		array[i]=st;
		st++;
	}
	console.log(array);
}

function rangeOdd(){
	let st=-15;
	let arr=[];
	for (let i = 0; i<31; i++) {
		arr[i]=st;
		st++;
	}

	let arrOd=[];
	for (let i = 0; i < arr.length; i++)
	{
	  if ((arr[i] % 2) === 0)
	  {
	  	arrOd.push(arr[i]);
	  }
	}
	console.log(arrOd);
}

function average(){
	let a=+document.querySelector("input[name='aNum']").value;
	let b=+document.querySelector("input[name='bNum']").value;
	a=(a+b)/2;
	alert(a);
}

function koren(){
 	let num=+document.querySelector("input[name='Num']").value
 	let num2=Math.sqrt(num);
 	alert(num2);
}

function cube(){
 	let num=+document.querySelector("input[name='Num5']").value
 	let duo=num*num;
 	let trio=num*num*num;
 	alert(duo);
 	alert(trio);
}