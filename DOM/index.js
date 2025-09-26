// const div=document.getElementsByTagName('div'); 
// div[0].innerText="hell0 world"
// div[0].style.backgroundColor="red"
// div[0].style.Color="green"
// console.log(div)

// const container=document.getElementsByClassName("container")
// console.dir(container)
// container[0].innerHTML='<h2 style=color:red>HElloo world</h2>'


// const h2=document.createElement('h2')
// h2.innerText='ABES ENGINERRING COLLEGE'
// h2.style.backgroundColor="BROWN"
// h2.style.color="#fff"
// container[0].appendChild(h2)

// const img=document.createElement('img')


// const button=document.getElementById('btn')
// // document.getElementById('disp').innerHTML="<h>loading image...</h>"
// function msg(){
// img.src="https://tse3.mm.bing.net/th/id/OIP.4eNStZ6EZlVipRzd4lpDwAHaE8?pid=Api&P=0&h=180"
// img.setAttribute('height','200px')
// img.setAttribute('wigth','200px')
// container[0].appendChild(img);
//     return "welcome to abes engineering college";
// }
// button.addEventListener("click",function(){
//     container=this.innerHTML=msg();
//     console.log(msg())

// })

// const button=document.getElementById('btn');
// function longData(){
//     console.log("Start");
//     for(let i=0; i<100000; i++){
//         console.log(i);
//     }
//     console.log("ENd");
// }
// button.addEventListener('click', longData);


// function greetmsg() {
//     return "welcome"
// }
// function msgHandler(msg, clbk) {
//     console.log(msg);
//     const data = clbk();
//     return msg + " " + data
// }

// const complete = msgHandler("hiii", greetmsg)
// // msgHandler("hiii", greetmsg)
// console.log(complete)

const myPromise = new Promise((resolve, reject) => {
    const password = '123456asdf'
    if(password.length > 8) {
        resolve('password length is ok')
    } else {
        reject('password is invalid')
    }
})
myPromise.then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('all the resources are closed successfully');
    
})