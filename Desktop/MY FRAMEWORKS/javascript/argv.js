const process= require('process');
let args=process.argv;

console.log("Total number of argumnts are: "+ args.length);
args.forEach((val,index)=>{
    console.log(`${index}: ${val}`)
})