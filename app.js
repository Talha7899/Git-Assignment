function Add(){
let num1=document.getElementById('First').value;
let num2=document.getElementById('Second').value;
document.getElementById('Result').innerHTML=parseInt(num1)+parseInt(num2);
};
function Subtract(){
let num1=document.getElementById('First').value;
let num2=document.getElementById('Second').value;
document.getElementById('Result').innerHTML=num1-num2;
};
function Product(){
let num1=document.getElementById('First').value;
let num2=document.getElementById('Second').value;
document.getElementById('Result').innerHTML=num1*num2;
};
function Division(){
let num1=document.getElementById('First').value;
let num2=document.getElementById('Second').value;
document.getElementById('Result').innerHTML=num1/num2;
};