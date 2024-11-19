"use strict";

const test = () =>{
  setTimeout(function() {
    console.log("Start of the code");
    alert("Notice Me!");
    console.log("End of Code");
  },2000);
  
};

const test2 =()=>{
  console.log("Now I get attention");
}

test();
test2();