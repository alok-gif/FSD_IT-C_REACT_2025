// console.log("hello world");

// let a = 50;
// if(a>10){
//     let a = 100;
//     console.log("a="+a);
// }else{
//     console.log("hhhhiii")
// }
// console.log("hiii"+a);

// const a=23;
// a=50;


// functionfun(msg){
//     return "Hey..."+msg;
//     // console.log("Hello")
// }

// const data=fun("greeting.....");
// console.log(data);

// const data = function(a,b){
//     return a*b;
// }
// console.log(data(12,20));

// const data=(msg)=>{
//     console.log("hey.. using arrow function")
// }
// data("in react development");

// const data = msg=>msg;
// const output=data("greeting of the day");
// console.log(output);

//IIFE 
// (function(){
//     console.log("welcome to mern session")
// })();

// setTimeout(() => {
//     console.log("hi guys")
// },10000)

// function greet(msg="JAVA"){
//     console.log(msg+" is a good language");
// }
// greet("python");

function selectlanguage(lang="python"){
    let result;
    if(lang=="java"){
        function javaCompiler(){
            // console.log("hi")
            return"Using java Compiler"

        }

        result=javaCompiler();
    }
    else if(lang == 'c'){
        function cCompiler(){
            // console.log("how");
            return "Using c Compiler"
        }
        result =cCompiler();
    }
    else if(lang == 'python'){
        function pythonCompiler(){
            // console.log("this");
            return "Using python Compiler"
        }
        result =pythonCompiler();
    }
    else{
        // console.log("no way");
        result = "No compiler found";
    }
    return result;
}

console.log(selectlanguage());