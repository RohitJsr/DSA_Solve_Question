/*
Reverse String 
Description

Given a string , reverse it

Use stack data structure for this purpose


Input
1<=T<=10

next T lines contain string s consisting of lower case english letters

1<=len(string) <= 100000


Output
output the reversed string for the given input for each test case.


Sample Input 1 

3
ab
cd
ef
Sample Output 1

ba
dc
fe
*/

// Javascript program to reverse
// String using Stack

// stack

class Stack
{
	size;
	top;
	a = [];

	// Function to check if stack is empty
	isEmpty()
	{
		return(this.top < 0);
	}
	
	constructor(n)
	{
		this.top = -1;
		this.size = n;
		this.a = new Array(this.size);
	}

	// Function to push element in Stack
	push(x)
	{
		if (this.top >= this.size)
		{
			console.log("Stack Overflow<br>");
			return false;
		}
		else
		{
			this.a[++this.top] = x;
			return true;
		}
	}

	// Function to pop element from stack
	pop()
	{
		if (this.top < 0)
		{
			console.log("Stack Underflow<br>");
			return 0;
		}
		else
		{
			let x = this.a[this.top--];
			return x;
		}
	}
}

// Function to reverse the string
function reverse(str)
{
	
	// Create a stack of capacity
	// equal to length of string
	let n = str.length;
	let obj = new Stack(n);
	
	// Push all characters of string
	// to stack
	let i;
	for(i = 0; i < n; i++)
		obj.push(str[i]);

	// Pop all characters of string
	// and put them back to str
	for(i = 0; i < n; i++)
	{
		let ch = obj.pop();
		str[i] = ch;
	}
	console.log(str.join(""))

}


function runProgram(input){
 input=input.trim().split("\n")
let num = +input[0];
let line=1;
for(let i=0;i<num;i++){
    let str=input[line++].split("");
    reverse(str)

}
    
}


 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}