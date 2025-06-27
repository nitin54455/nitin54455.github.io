//call back function
// let f1=()=>{
//     console.log('this is function f1')
// }

// let main=(x)=>{
//     x();
// };

// main(f1)




// let main=(x)=>{
//     x();
// };
// main(()=>{
//     console.log("this is function")
// });


function f1(x){
    console.log(x);

}
const main=()=> f1(5);
main();

