

// const hello = document.querySelector('#hello');
// const goodbye = document.querySelector("#goodbye");
// hello.onclick = function() {
//     console.log("hello");
// }
// hello.onclick = function(){
//     alert("hello");
// }
// goodbye.onclick = function(){
//     console.log("lmao");
// }

// hello.addEventListener('click' , () => {
//     console.log("hello")
// })
// hello.addEventListener('click', function() {
//     console.log("hello")
// });

document.querySelector("#hello").onclick = () => {
    console.log("hello")
}

document.querySelector("#goodbye").addEventListener('click', () => {
    console.log("goodbye");
})