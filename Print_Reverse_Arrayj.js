/*
Print Reverse Array 
Description

You are given a arrayarrand its sizen. You need to print all elements of array in reverse order on new line.

Use stack data structure for this question

Input
First line contains N, size of array.

Next line contains N space integers, numbers in array.


Output
Print all number of array in reverse order on new line.


Sample Input 1 

5
1 2 3 4 5
Sample Output 1

5
4
3
2
1
Hint

Print all number of array in reverse order on new line.


*/
function  solve(size,arr)
  {
    //Temp stack
    let stack = [];

    for(let i = 0; i < arr.length; i++){
       //Copy all the values in stack
       stack.push(arr[i]);
    }

    for(let i = 0; i < arr.length; i++){
      //Copy elements back to the array
      arr[i] = stack.pop();
    }
    //console.log(arr)
    for(let i=0;i<arr.length;i++){
          console.log(arr[i]);

    }
  
  }
  function runProgram(input){
 input=input.trim().split("\n")
 let size= +input[0];
 let arr = input[1].trim().split(" ").map(Number);
 solve(size,arr)

    
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