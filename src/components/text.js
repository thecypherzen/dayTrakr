#!/usr/bin/node

const myarr = [false,true, false, false, true, true, false];
const newarr = myarr.slice().sort((a,b) => a-b);
const temp = myarr;
console.log(newarr);
console.log(myarr === newarr, myarr === temp);
