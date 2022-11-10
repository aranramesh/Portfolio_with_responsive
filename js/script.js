const header =document.querySelector("header");

window.addEventListener("scroll" ,function(){
    header.classList.toggle ("sticky", window.scrollY > 0)
});

// let n = 5;
// let string = "";


// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);




// let input3=2569;

// while(input3!=0){
//     let rem3=input3%10;

//     if(rem3==1){
//         console.log("one")
//     }
//         else if(rem3==2){
//         console.log("two")
//     }
//     else if(rem3==3){
//         console.log("three")
//     }
//     else if(rem3==4){
//         console.log("four")
//     }
//     else if(rem3==5){
//         console.log("five")
//     }
//     else if(rem3==6){
//         console.log("six")
//     }
//     else if(rem3==7){
//         console.log("seven")
//     }
//     else if(rem3==8){
//         console.log("eight")
//     }
//     else if(rem3==9){
//         console.log("nine")
//     }
//     else{
//         console.log("zero")
//     }
//     input3=(input3-rem3)/10;
// }
  


